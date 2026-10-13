/**
 *    Google Sheets integration for bwip-js.
 *
 *    Copyright (c) 2026 Noah Stephens 
 *    SPDX-License-Identifier: AGPL-3.0-only
 *    
 *    This program is free software: you can redistribute it and/or modify
 *    it under the terms of the GNU Affero General Public License as
 *    published by the Free Software Foundation, either version 3 of the
 *    License, or (at your option) any later version.
 *
 *    This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU Affero General Public License for more details.
 *
 *    You should have received a copy of the GNU Affero General Public License
 *    along with this program.  If not, see <https://www.gnu.org/licenses/>.
 * 
 *    This application releys on the metafloor/bwip-js project.
 *    Refer to https://github.com/metafloor/bwip-js for companion software
 *    licenses.
 * 
*     Spreadsheet custom functions return URLs from the official bwip-js online
 *    API.  The sidebar loads the browser build of bwip-js into its global scope
 *    for previews and for the authoritative symbol catalog.
 */

var BWIP_API_BASE_ = 'https://bwipjs-api.metafloor.com/';

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Barcodes')
    .addItem('Open barcode generator', 'showBarcodeSidebar')
    .addSeparator()
    .addItem('Help', 'showBarcodeHelp')
    .addToUi();
}

function onInstall() {
  onOpen();
}

function showBarcodeSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('Sidebar')
    .setTitle('bwip-js Barcode Generator');
  SpreadsheetApp.getUi().showSidebar(html);
}

function showBarcodeHelp() {
  var html = HtmlService.createHtmlOutputFromFile('Help')
    .setWidth(720)
    .setHeight(640);
  SpreadsheetApp.getUi().showModalDialog(html, 'Barcode Generator Help');
}

/**
 * Builds a bwip-js image URL.
 *
 * Options may be an ampersand/space separated string such as
 * "includetext textxalign=center" or a JSON object string such as
 * '{"includetext":true,"backgroundcolor":"ffffff"}'.
 *
 * @param {string} barcodeType A bwip-js bcid, such as qrcode or code128.
 * @param {string|Array<Array<*>>} text Text to encode, or a range of values.
 * @param {string=} options Optional bwip-js/BWIPP options.
 * @param {number=} scale Optional integer scale; defaults to 2.
 * @param {string=} rotate N, R, L, or I; defaults to N.
 * @return {string|Array<Array<string>>} A PNG URL or a matching array of URLs.
 * @customfunction
 */
function BWIP_URL(barcodeType, text, options, scale, rotate) {
  if (Array.isArray(text)) {
    return text.map(function(row) {
      return row.map(function(value) {
        return buildBwipUrl_(barcodeType, value, options, scale, rotate);
      });
    });
  }
  return buildBwipUrl_(barcodeType, text, options, scale, rotate);
}

function buildBwipUrl_(barcodeType, text, options, scale, rotate) {
  var bcid = String(barcodeType == null ? '' : barcodeType).trim();
  if (!bcid) {
    throw new Error('A barcode type is required. Example: qrcode');
  }
  if (!/^[A-Za-z0-9-]+$/.test(bcid)) {
    throw new Error('Invalid barcode type: ' + bcid);
  }
  if (text === null || typeof text === 'undefined' || text === '') {
    return '';
  }

  var query = [
    'bcid=' + encodeURIComponent(bcid),
    'text=' + encodeURIComponent(String(text))
  ];

  appendOptions_(query, options);

  var parsedScale = Number(scale || 2);
  if (!isFinite(parsedScale) || parsedScale < 1 || parsedScale % 1 !== 0) {
    throw new Error('Scale must be a positive integer.');
  }
  query.push('scale=' + parsedScale);

  var parsedRotate = String(rotate || 'N').toUpperCase();
  if (['N', 'R', 'L', 'I'].indexOf(parsedRotate) === -1) {
    throw new Error('Rotate must be N, R, L, or I.');
  }
  if (parsedRotate !== 'N') {
    query.push('rotate=' + parsedRotate);
  }

  return BWIP_API_BASE_ + '?' + query.join('&');
}

function appendOptions_(query, options) {
  if (options === null || typeof options === 'undefined' || options === '') {
    return;
  }

  var raw = String(options).trim();
  if (!raw) {
    return;
  }

  if (raw.charAt(0) === '{') {
    var objectOptions = JSON.parse(raw);
    Object.keys(objectOptions).sort().forEach(function(key) {
      appendOption_(query, key, objectOptions[key]);
    });
    return;
  }

  raw.split(/[&\s]+/).filter(Boolean).forEach(function(token) {
    var equals = token.indexOf('=');
    if (equals === -1) {
      appendOption_(query, token, true);
    } else {
      appendOption_(query, token.slice(0, equals), token.slice(equals + 1));
    }
  });
}

function appendOption_(query, key, value) {
  key = String(key).trim();
  if (!/^[A-Za-z][A-Za-z0-9_-]*$/.test(key)) {
    throw new Error('Invalid option name: ' + key);
  }
  if (/^(bcid|text|scale|scaleX|scaleY|rotate)$/i.test(key)) {
    return;
  }
  if (value === true || String(value).toLowerCase() === 'true') {
    query.push(encodeURIComponent(key));
  } else if (value !== false && String(value).toLowerCase() !== 'false' && value !== '') {
    query.push(encodeURIComponent(key) + '=' + encodeURIComponent(String(value)));
  }
}

function insertBarcodeFromSidebar(url, mode) {
  validateBwipUrl_(url);
  var cell = SpreadsheetApp.getActiveRange().getCell(1, 1);
  if (mode === 'image') {
    cell.setFormula('=IMAGE("' + String(url).replace(/"/g, '""') + '")');
  } else if (mode === 'link') {
    cell.setRichTextValue(
      SpreadsheetApp.newRichTextValue()
        .setText('Open barcode image')
        .setLinkUrl(url)
        .build()
    );
  } else if (mode === 'url') {
    cell.setValue(url);
  } else {
    throw new Error('Unknown insertion mode.');
  }
  return cell.getA1Notation();
}

function validateBwipUrl_(url) {
  var value = String(url || '');
  if (value.indexOf(BWIP_API_BASE_ + '?bcid=') !== 0) {
    throw new Error('Only URLs produced by this barcode generator can be inserted.');
  }
}
