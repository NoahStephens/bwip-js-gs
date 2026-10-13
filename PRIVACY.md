# Privacy Policy for Barcode Generator for Google Sheets

**Effective date:** October 12, 2026  
**Last updated:** October 12, 2026

This Privacy Policy explains how Barcode Generator for Google Sheets (the **“App”**), developed and maintained by Noah Stephens (the **“Developer,” “we,” “us,”** or **“our”**), accesses, uses, shares, stores, and protects information.

The App is an open-source Google Sheets Editor add-on that creates barcode image URLs and previews using bwip-js. Its source code is available at [github.com/NoahStephens/bwip-js-gs](https://github.com/NoahStephens/bwip-js-gs).

## 1. Scope

This policy applies to the App, its Google Workspace Marketplace listing, and the help pages hosted for the App. It does not replace the privacy policies of Google, GitHub, jsDelivr, the bwip-js image service, or any other third-party service.

## 2. Information the App accesses or processes

### Google Sheets content you choose to use

The App processes the values that you explicitly provide to a barcode formula or enter in the barcode-generator sidebar. When you use a sidebar insertion button, the App accesses the currently selected cell so it can insert an image formula, URL, or hyperlink.

The App does not automatically scan or upload the rest of your spreadsheet. It does not request access to all files in Google Drive.

### Barcode contents and rendering settings

To make a barcode renderable by the Google Sheets `IMAGE` function, the App creates a URL containing:

- the text or value being encoded;
- the selected barcode type; and
- rendering settings such as scale, rotation, colors, and barcode-specific options.

That URL is sent over HTTPS to `bwipjs-api.metafloor.com`, which returns the barcode as a PNG image. Because the encoded value is part of the URL, it may also appear in the spreadsheet, spreadsheet revision history, browser history, caches, network proxy logs, or service logs.

**Do not use the public image service to encode passwords, authentication secrets, private keys, protected health information, payment-card data, or other highly confidential information.**

### Authorization and Google account information

The App requests only the Google authorization permissions listed in its Apps Script manifest. These permissions allow it to display its interface and modify the spreadsheet in which it is being used.

Google handles the authorization process. The App’s code does not request your password, retrieve your Google access token, or intentionally collect your Google profile, contacts, email messages, or files outside the current spreadsheet.

### Help and support information

If you submit a GitHub issue or otherwise contact the Developer, we receive the information you choose to provide, such as your GitHub username, problem description, browser details, formulas, and error messages. GitHub issues are normally public. Do not include confidential barcode contents, access credentials, personal data, or private spreadsheet links in an issue.

### Automatically collected information

The Developer does not operate an analytics service, advertising tracker, or independent application server for the App. The App does not set its own cookies. Google, GitHub, jsDelivr, and the barcode image service may independently receive ordinary technical information such as IP address, user agent, timestamps, request URLs, and diagnostic logs when their services are used.

## 3. How information is used

Information is used only to:

- generate barcode previews and image URLs requested by the user;
- insert the requested formula, URL, or hyperlink into the selected spreadsheet cell;
- provide, secure, troubleshoot, and improve the App;
- respond to support requests; and
- comply with applicable law or protect the App, its users, and the public from fraud, abuse, or security threats.

The Developer does not sell personal information, use Google user data for advertising, create advertising profiles, or permit humans to read Google user data except with the user’s explicit request for support, when necessary to investigate abuse or security incidents, or when required by law.

## 4. When information is shared

The App relies on the following service providers and platforms:

- **Google:** Google Sheets and Google Apps Script host and execute the add-on, manage authorization, and store spreadsheet content. Google processes information under its own terms and privacy policy.
- **bwip-js image service (`bwipjs-api.metafloor.com`):** receives barcode contents and rendering options in an HTTPS URL and returns a PNG image.
- **jsDelivr (`cdn.jsdelivr.net`):** provides the pinned bwip-js browser library used for local sidebar previews. The App does not intentionally send barcode contents to jsDelivr.
- **GitHub:** hosts the source code, documentation, and optional public support issues.

Information may also be disclosed when reasonably necessary to comply with law, enforce legal rights, or protect users and the public from fraud, abuse, or security threats.

The Developer does not authorize these parties to use Google user data for advertising. Each third party processes information under its own terms and privacy practices.

## 5. Storage and retention

The Developer does not operate a database or independent server that stores spreadsheet contents or generated barcodes.

- Barcode formulas and URLs remain in the spreadsheet until a user removes them. Google controls spreadsheet storage and revision history.
- A barcode URL may remain in browser history, caches, network logs, or third-party service logs according to the applicable platform’s settings and retention practices.
- GitHub issues and other support communications are retained as needed to respond, maintain a support history, and improve the App. Public issue authors may edit or delete their own content subject to GitHub’s functionality and policies.

Uninstalling the App stops future use but does not automatically remove formulas, URLs, images, or links already inserted into spreadsheets. Users can remove those items directly from their spreadsheets.

## 6. Security

The App uses HTTPS URLs for external requests and relies on Google’s authorization and Apps Script security controls. The Developer limits requested permissions and publishes the source code for inspection.

No method of transmission or storage is completely secure. In particular, placing sensitive data in a barcode URL creates additional exposure. Users are responsible for deciding whether the public image service is appropriate for the information they intend to encode.

## 7. Google API Services User Data Policy

The App’s use and transfer of information received from Google APIs adheres to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including its Limited Use requirements. Google user data is used only to provide or improve the App’s user-facing barcode functionality, maintain security, provide user-requested support, or comply with applicable law.

## 8. Your choices and rights

You can:

- choose what information to encode;
- avoid using the App for confidential information;
- delete formulas, URLs, links, and images from your spreadsheet;
- revoke the App’s Google Account access from your Google Account security settings;
- uninstall the App; and
- request access to, correction of, or deletion of support information controlled by the Developer by contacting us.

Depending on where you live, you may have additional privacy rights under applicable law. We may need to verify your identity before completing a request. Data controlled by Google, GitHub, jsDelivr, or the image service must be managed through those providers.

## 9. International processing

Google and the third-party services described above may process information in countries other than your own. Their processing is governed by their respective terms, privacy policies, and transfer mechanisms.

## 10. Children’s privacy

The App is a general productivity tool and is not directed to children under 13 or the minimum age required by local law. The Developer does not knowingly collect personal information from children through the App.

## 11. Changes to this policy

We may update this policy when the App’s functionality, permissions, service providers, or legal obligations change. The “Last updated” date will identify the latest revision. If a change materially alters how Google user data is used, we will provide appropriate notice and obtain consent when required before applying the new use.

## 12. Contact

For privacy questions or requests, contact:

**Noah Stephens**  
Email: **noahstephens@fastmail.com**  
Source repository: [github.com/NoahStephens/bwip-js-gs](https://github.com/NoahStephens/bwip-js-gs)

Do not submit private information through a public GitHub issue.

