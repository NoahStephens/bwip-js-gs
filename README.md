# bwip-js Barcode Generator for Google Sheets

Repository: [github.com/NoahStephens/bwip-js-gs](https://github.com/NoahStephens/bwip-js-gs)

This bound Google Apps Script project adds:

- A **Barcodes → Open barcode generator** sidebar with the complete bwip-js symbol catalog, live canvas previews, and buttons that insert an `IMAGE` formula, URL, or hyperlink.
- A polished **Barcodes → Help** page with formula examples, troubleshooting, and data-handling disclosures. The same `Help.html` can be hosted as the Marketplace support page.
- `BWIP_URL(type, text, options, scale, rotate)`, a generic Sheets custom function.
- A named custom function for every encoder included in bwip-js 4.11.4, such as `BWIP_QRCODE`, `BWIP_CODE128`, `BWIP_DATAMATRIX`, and `BWIP_PDF417`.
- Range support, so a call such as `=BWIP_QRCODE(A2:A10)` spills a matching column of URLs.

## Install in a spreadsheet

1. Open the spreadsheet and choose **Extensions → Apps Script**.
2. Add the files `Code.gs`, `BarcodeFunctions.gs`, `Sidebar.html`, and `Help.html` from this folder. Replace the generated manifest with `appsscript.json` (in Apps Script, enable **Project Settings → Show "appsscript.json" manifest file in editor**).
3. Save the project and reload the spreadsheet.
4. Use the new **Barcodes** menu. The first sidebar insertion asks you to authorize access to the current spreadsheet.

If you use `clasp`, clone the repository, create `.clasp.json` from `.clasp.json.example`, add your Apps Script project ID, and run `clasp push`.

## Publish the help page

The GitHub Pages copy is in `docs/index.html`. In the repository, open **Settings → Pages**, choose **Deploy from a branch**, then select the `main` branch and `/docs` folder. The resulting help URL is:

```text
https://noahstephens.github.io/bwip-js-gs/
```

Use that as the **Support URL** in the Google Workspace Marketplace listing. Before submitting a public listing, add your real support contact and link the page to your separate privacy policy and terms of service.

## Push to GitHub

```sh
git init
git add .
git commit -m "Initial Google Sheets barcode add-on"
git branch -M main
git remote add origin https://github.com/NoahStephens/bwip-js-gs.git
git push -u origin main
```

## Formula examples

Return a URL:

```text
=BWIP_QRCODE(A2)
```

Render the returned URL as an image:

```text
=IMAGE(BWIP_QRCODE(A2))
```

Create a Code 128 image with human-readable text at scale 3:

```text
=IMAGE(BWIP_CODE128(A2, "includetext textxalign=center", 3))
```

Use the generic function:

```text
=BWIP_URL("datamatrix", A2, "eclevel=200", 3, "N")
```

Options can also be supplied as JSON when values contain spaces:

```text
=BWIP_CODE128(A2, "{""includetext"":true,""alttext"":""Inventory item""}")
```

Rotation values are `N` (normal), `R` (90° clockwise), `L` (90° counter-clockwise), and `I` (180°).

## How it works

The sidebar pins the UMD browser build of bwip-js 4.11.4 from jsDelivr. That script creates one global object, `bwipjs`, which is used for local canvas previews and its `symbolList` catalog.

Sheets custom functions must return a value that cells can use. They therefore build HTTPS URLs for the official bwip-js PNG API instead of returning binary image data. This makes the same result usable with `IMAGE(...)`, as a plain URL, or as a hyperlink.

Because rendered cell images use an external service, the spreadsheet viewer needs network access to `https://bwipjs-api.metafloor.com/`. A Workspace administrator may also need to allow jsDelivr for the sidebar library.

## Function naming

Every named function begins with `BWIP_`. The function name is the uppercase bcid; dashes become underscores. For example:

| bwip-js bcid | Sheets function |
|---|---|
| `qrcode` | `BWIP_QRCODE` |
| `gs1-128` | `BWIP_GS1_128` |
| `gs1-cc` | `BWIP_GS1_CC` |
| `rationalizedCodabar` | `BWIP_RATIONALIZEDCODABAR` |

All named functions have the same arguments:

```text
BWIP_<TYPE>(text, [options], [scale], [rotate])
```

The full list lives in `BarcodeFunctions.gs` and follows the official bwip-js supported barcode list.

## Operational note

The project deliberately returns public API URLs so Sheets can render them directly. If encoded values are sensitive or an external dependency is unacceptable, deploy your own bwip-js image endpoint and change `BWIP_API_BASE_` in `Code.gs` plus the matching base URL in `Sidebar.html`.
