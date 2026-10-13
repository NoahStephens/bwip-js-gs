/*
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
 *    One named Google Sheets custom function for every encoder in bwip-js 4.11.4.
 *    Each signature is: FUNCTION(text, [options], [scale], [rotate]).
 *    Dashes in bcid names become underscores in function names.
 */

function BWIP_AUSPOST(t,o,s,r){return BWIP_URL('auspost',t,o,s,r);}
function BWIP_AZTECCODE(t,o,s,r){return BWIP_URL('azteccode',t,o,s,r);}
function BWIP_AZTECCODECOMPACT(t,o,s,r){return BWIP_URL('azteccodecompact',t,o,s,r);}
function BWIP_AZTECRUNE(t,o,s,r){return BWIP_URL('aztecrune',t,o,s,r);}
function BWIP_BC412(t,o,s,r){return BWIP_URL('bc412',t,o,s,r);}
function BWIP_CHANNELCODE(t,o,s,r){return BWIP_URL('channelcode',t,o,s,r);}
function BWIP_CODABLOCKF(t,o,s,r){return BWIP_URL('codablockf',t,o,s,r);}
function BWIP_CODE11(t,o,s,r){return BWIP_URL('code11',t,o,s,r);}
function BWIP_CODE128(t,o,s,r){return BWIP_URL('code128',t,o,s,r);}
function BWIP_CODE16K(t,o,s,r){return BWIP_URL('code16k',t,o,s,r);}
function BWIP_CODE2OF5(t,o,s,r){return BWIP_URL('code2of5',t,o,s,r);}
function BWIP_CODE32(t,o,s,r){return BWIP_URL('code32',t,o,s,r);}
function BWIP_CODE39(t,o,s,r){return BWIP_URL('code39',t,o,s,r);}
function BWIP_CODE39EXT(t,o,s,r){return BWIP_URL('code39ext',t,o,s,r);}
function BWIP_CODE49(t,o,s,r){return BWIP_URL('code49',t,o,s,r);}
function BWIP_CODE93(t,o,s,r){return BWIP_URL('code93',t,o,s,r);}
function BWIP_CODE93EXT(t,o,s,r){return BWIP_URL('code93ext',t,o,s,r);}
function BWIP_CODEONE(t,o,s,r){return BWIP_URL('codeone',t,o,s,r);}
function BWIP_COOP2OF5(t,o,s,r){return BWIP_URL('coop2of5',t,o,s,r);}
function BWIP_D3AQR(t,o,s,r){return BWIP_URL('d3aqr',t,o,s,r);}
function BWIP_DAFT(t,o,s,r){return BWIP_URL('daft',t,o,s,r);}
function BWIP_DATABAREXPANDED(t,o,s,r){return BWIP_URL('databarexpanded',t,o,s,r);}
function BWIP_DATABAREXPANDEDCOMPOSITE(t,o,s,r){return BWIP_URL('databarexpandedcomposite',t,o,s,r);}
function BWIP_DATABAREXPANDEDSTACKED(t,o,s,r){return BWIP_URL('databarexpandedstacked',t,o,s,r);}
function BWIP_DATABAREXPANDEDSTACKEDCOMPOSITE(t,o,s,r){return BWIP_URL('databarexpandedstackedcomposite',t,o,s,r);}
function BWIP_DATABARLIMITED(t,o,s,r){return BWIP_URL('databarlimited',t,o,s,r);}
function BWIP_DATABARLIMITEDCOMPOSITE(t,o,s,r){return BWIP_URL('databarlimitedcomposite',t,o,s,r);}
function BWIP_DATABAROMNI(t,o,s,r){return BWIP_URL('databaromni',t,o,s,r);}
function BWIP_DATABAROMNICOMPOSITE(t,o,s,r){return BWIP_URL('databaromnicomposite',t,o,s,r);}
function BWIP_DATABARSTACKED(t,o,s,r){return BWIP_URL('databarstacked',t,o,s,r);}
function BWIP_DATABARSTACKEDCOMPOSITE(t,o,s,r){return BWIP_URL('databarstackedcomposite',t,o,s,r);}
function BWIP_DATABARSTACKEDOMNI(t,o,s,r){return BWIP_URL('databarstackedomni',t,o,s,r);}
function BWIP_DATABARSTACKEDOMNICOMPOSITE(t,o,s,r){return BWIP_URL('databarstackedomnicomposite',t,o,s,r);}
function BWIP_DATABARTRUNCATED(t,o,s,r){return BWIP_URL('databartruncated',t,o,s,r);}
function BWIP_DATABARTRUNCATEDCOMPOSITE(t,o,s,r){return BWIP_URL('databartruncatedcomposite',t,o,s,r);}
function BWIP_DATALOGIC2OF5(t,o,s,r){return BWIP_URL('datalogic2of5',t,o,s,r);}
function BWIP_DATAMATRIX(t,o,s,r){return BWIP_URL('datamatrix',t,o,s,r);}
function BWIP_DATAMATRIXRECTANGULAR(t,o,s,r){return BWIP_URL('datamatrixrectangular',t,o,s,r);}
function BWIP_DATAMATRIXRECTANGULAREXTENSION(t,o,s,r){return BWIP_URL('datamatrixrectangularextension',t,o,s,r);}
function BWIP_DOTCODE(t,o,s,r){return BWIP_URL('dotcode',t,o,s,r);}
function BWIP_EAN13(t,o,s,r){return BWIP_URL('ean13',t,o,s,r);}
function BWIP_EAN13COMPOSITE(t,o,s,r){return BWIP_URL('ean13composite',t,o,s,r);}
function BWIP_EAN14(t,o,s,r){return BWIP_URL('ean14',t,o,s,r);}
function BWIP_EAN2(t,o,s,r){return BWIP_URL('ean2',t,o,s,r);}
function BWIP_EAN5(t,o,s,r){return BWIP_URL('ean5',t,o,s,r);}
function BWIP_EAN8(t,o,s,r){return BWIP_URL('ean8',t,o,s,r);}
function BWIP_EAN8COMPOSITE(t,o,s,r){return BWIP_URL('ean8composite',t,o,s,r);}
function BWIP_FLATTERMARKEN(t,o,s,r){return BWIP_URL('flattermarken',t,o,s,r);}
function BWIP_GS1_128(t,o,s,r){return BWIP_URL('gs1-128',t,o,s,r);}
function BWIP_GS1_128COMPOSITE(t,o,s,r){return BWIP_URL('gs1-128composite',t,o,s,r);}
function BWIP_GS1_CC(t,o,s,r){return BWIP_URL('gs1-cc',t,o,s,r);}
function BWIP_GS1DATAMATRIX(t,o,s,r){return BWIP_URL('gs1datamatrix',t,o,s,r);}
function BWIP_GS1DATAMATRIXRECTANGULAR(t,o,s,r){return BWIP_URL('gs1datamatrixrectangular',t,o,s,r);}
function BWIP_GS1DLDATAMATRIX(t,o,s,r){return BWIP_URL('gs1dldatamatrix',t,o,s,r);}
function BWIP_GS1DLQRCODE(t,o,s,r){return BWIP_URL('gs1dlqrcode',t,o,s,r);}
function BWIP_GS1DOTCODE(t,o,s,r){return BWIP_URL('gs1dotcode',t,o,s,r);}
function BWIP_GS1NORTHAMERICANCOUPON(t,o,s,r){return BWIP_URL('gs1northamericancoupon',t,o,s,r);}
function BWIP_GS1QRCODE(t,o,s,r){return BWIP_URL('gs1qrcode',t,o,s,r);}
function BWIP_HANXIN(t,o,s,r){return BWIP_URL('hanxin',t,o,s,r);}
function BWIP_HIBCAZTECCODE(t,o,s,r){return BWIP_URL('hibcazteccode',t,o,s,r);}
function BWIP_HIBCCODABLOCKF(t,o,s,r){return BWIP_URL('hibccodablockf',t,o,s,r);}
function BWIP_HIBCCODE128(t,o,s,r){return BWIP_URL('hibccode128',t,o,s,r);}
function BWIP_HIBCCODE39(t,o,s,r){return BWIP_URL('hibccode39',t,o,s,r);}
function BWIP_HIBCDATAMATRIX(t,o,s,r){return BWIP_URL('hibcdatamatrix',t,o,s,r);}
function BWIP_HIBCDATAMATRIXRECTANGULAR(t,o,s,r){return BWIP_URL('hibcdatamatrixrectangular',t,o,s,r);}
function BWIP_HIBCMICROPDF417(t,o,s,r){return BWIP_URL('hibcmicropdf417',t,o,s,r);}
function BWIP_HIBCPDF417(t,o,s,r){return BWIP_URL('hibcpdf417',t,o,s,r);}
function BWIP_HIBCQRCODE(t,o,s,r){return BWIP_URL('hibcqrcode',t,o,s,r);}
function BWIP_IATA2OF5(t,o,s,r){return BWIP_URL('iata2of5',t,o,s,r);}
function BWIP_IDENTCODE(t,o,s,r){return BWIP_URL('identcode',t,o,s,r);}
function BWIP_INDUSTRIAL2OF5(t,o,s,r){return BWIP_URL('industrial2of5',t,o,s,r);}
function BWIP_INTERLEAVED2OF5(t,o,s,r){return BWIP_URL('interleaved2of5',t,o,s,r);}
function BWIP_ISBN(t,o,s,r){return BWIP_URL('isbn',t,o,s,r);}
function BWIP_ISMN(t,o,s,r){return BWIP_URL('ismn',t,o,s,r);}
function BWIP_ISSN(t,o,s,r){return BWIP_URL('issn',t,o,s,r);}
function BWIP_ITF14(t,o,s,r){return BWIP_URL('itf14',t,o,s,r);}
function BWIP_JAPANPOST(t,o,s,r){return BWIP_URL('japanpost',t,o,s,r);}
function BWIP_KIX(t,o,s,r){return BWIP_URL('kix',t,o,s,r);}
function BWIP_LEITCODE(t,o,s,r){return BWIP_URL('leitcode',t,o,s,r);}
function BWIP_MAILMARK(t,o,s,r){return BWIP_URL('mailmark',t,o,s,r);}
function BWIP_MANDS(t,o,s,r){return BWIP_URL('mands',t,o,s,r);}
function BWIP_MATRIX2OF5(t,o,s,r){return BWIP_URL('matrix2of5',t,o,s,r);}
function BWIP_MAXICODE(t,o,s,r){return BWIP_URL('maxicode',t,o,s,r);}
function BWIP_MICROPDF417(t,o,s,r){return BWIP_URL('micropdf417',t,o,s,r);}
function BWIP_MICROQRCODE(t,o,s,r){return BWIP_URL('microqrcode',t,o,s,r);}
function BWIP_MSI(t,o,s,r){return BWIP_URL('msi',t,o,s,r);}
function BWIP_ONECODE(t,o,s,r){return BWIP_URL('onecode',t,o,s,r);}
function BWIP_PDF417(t,o,s,r){return BWIP_URL('pdf417',t,o,s,r);}
function BWIP_PDF417COMPACT(t,o,s,r){return BWIP_URL('pdf417compact',t,o,s,r);}
function BWIP_PHARMACODE(t,o,s,r){return BWIP_URL('pharmacode',t,o,s,r);}
function BWIP_PHARMACODE2(t,o,s,r){return BWIP_URL('pharmacode2',t,o,s,r);}
function BWIP_PLANET(t,o,s,r){return BWIP_URL('planet',t,o,s,r);}
function BWIP_PLESSEY(t,o,s,r){return BWIP_URL('plessey',t,o,s,r);}
function BWIP_POSICODE(t,o,s,r){return BWIP_URL('posicode',t,o,s,r);}
function BWIP_POSTNET(t,o,s,r){return BWIP_URL('postnet',t,o,s,r);}
function BWIP_PZN(t,o,s,r){return BWIP_URL('pzn',t,o,s,r);}
function BWIP_QRCODE(t,o,s,r){return BWIP_URL('qrcode',t,o,s,r);}
function BWIP_RATIONALIZEDCODABAR(t,o,s,r){return BWIP_URL('rationalizedCodabar',t,o,s,r);}
function BWIP_RAW(t,o,s,r){return BWIP_URL('raw',t,o,s,r);}
function BWIP_RECTANGULARMICROQRCODE(t,o,s,r){return BWIP_URL('rectangularmicroqrcode',t,o,s,r);}
function BWIP_ROYALMAIL(t,o,s,r){return BWIP_URL('royalmail',t,o,s,r);}
function BWIP_SSCC18(t,o,s,r){return BWIP_URL('sscc18',t,o,s,r);}
function BWIP_SWISSQRCODE(t,o,s,r){return BWIP_URL('swissqrcode',t,o,s,r);}
function BWIP_SYMBOL(t,o,s,r){return BWIP_URL('symbol',t,o,s,r);}
function BWIP_TELEPEN(t,o,s,r){return BWIP_URL('telepen',t,o,s,r);}
function BWIP_TELEPENNUMERIC(t,o,s,r){return BWIP_URL('telepennumeric',t,o,s,r);}
function BWIP_ULTRACODE(t,o,s,r){return BWIP_URL('ultracode',t,o,s,r);}
function BWIP_UPCA(t,o,s,r){return BWIP_URL('upca',t,o,s,r);}
function BWIP_UPCACOMPOSITE(t,o,s,r){return BWIP_URL('upcacomposite',t,o,s,r);}
function BWIP_UPCE(t,o,s,r){return BWIP_URL('upce',t,o,s,r);}
function BWIP_UPCECOMPOSITE(t,o,s,r){return BWIP_URL('upcecomposite',t,o,s,r);}

