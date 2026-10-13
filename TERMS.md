# Terms of Service for Barcode Generator for Google Sheets

**Effective date:** October 12, 2026  
**Last updated:** October 12, 2026

These Terms of Service (**“Terms”**) govern your installation of and access to Barcode Generator for Google Sheets (the **“App”**), developed and maintained by Noah Stephens (the **“Developer,” “we,” “us,”** or **“our”**). By installing, accessing, or using the App, you agree to these Terms. If you do not agree, do not install or use the App.

> **Before publishing:** Replace `LEGAL_CONTACT_EMAIL` with a monitored email address and `GOVERNING_LAW_JURISDICTION` with the jurisdiction chosen after obtaining legal advice.

## 1. The App

The App is an open-source Google Sheets Editor add-on that creates barcode previews and image URLs using bwip-js. It includes spreadsheet custom functions and a sidebar interface. The App relies on Google Sheets, Google Apps Script, jsDelivr, and the public bwip-js image service.

The App generates barcode images and URLs as a convenience. It does not certify that a barcode complies with a particular industry, carrier, regulatory, payment, healthcare, identification, or retail standard. You are responsible for testing generated barcodes with the intended scanners, printers, materials, workflows, and applicable specifications before relying on them.

## 2. Eligibility and authority

You must be legally able to enter into these Terms. If you use the App for an organization, you represent that you have authority to accept these Terms on its behalf, and “you” includes that organization.

If your Google Workspace account is managed by an administrator, your use may also be subject to the organization’s policies and administrator controls.

## 3. Permission to use the App

Subject to these Terms, you may install and use the App for lawful personal or business purposes. Your use of the source code is also subject to any license files and third-party notices included in the repository. These Terms do not override an applicable open-source license.

## 4. Your content and instructions

You retain ownership of values, text, options, and other content you submit to the App (**“User Content”**). You authorize the App and its service providers to process User Content only as needed to generate requested barcodes, insert requested results, operate and secure the App, provide user-requested support, and comply with law.

You are responsible for ensuring that you have the necessary rights and permissions to encode, transmit, and use User Content. You are also responsible for the accuracy, legality, and consequences of the barcodes you generate.

## 5. Public barcode URLs and sensitive information

The App creates image URLs that contain the value being encoded and sends those URLs over HTTPS to `bwipjs-api.metafloor.com`. Such URLs may be stored in spreadsheets, revision history, browser history, caches, network logs, or third-party service logs.

You must not use the public barcode service to encode passwords, authentication secrets, private keys, protected health information, payment-card data, or other highly confidential information. If your use case requires confidentiality or special regulatory safeguards, do not use the public endpoint; deploy an appropriately secured barcode service and assess it for your requirements.

## 6. Acceptable use

You must not use the App to:

- violate any law, regulation, contract, intellectual-property right, privacy right, or other right;
- create deceptive, fraudulent, counterfeit, unauthorized, or malicious barcodes;
- impersonate another person or misrepresent the source, destination, price, identity, authorization, or contents of an item or transaction;
- encode malware, phishing links, stolen credentials, or instructions intended to harm systems or people;
- interfere with, overload, probe, or circumvent the App or a third-party service;
- remove required notices or falsely claim affiliation with Google, bwip-js, or another party; or
- use the App in a safety-critical context where an incorrect or unavailable barcode could reasonably cause death, personal injury, or serious property or environmental damage.

## 7. Third-party services

The App depends on third-party platforms and services, including Google, GitHub, jsDelivr, bwip-js, and `bwipjs-api.metafloor.com`. Your use of those services may be governed by their own terms and policies. We do not control and are not responsible for their availability, security, performance, changes, or data-handling practices.

Google, Google Sheets, and Google Workspace are trademarks of Google LLC. The App is not endorsed by or affiliated with Google or the bwip-js maintainers unless expressly stated otherwise.

## 8. Privacy

Our [Privacy Policy](https://noahstephens.github.io/bwip-js-gs/privacy-policy) explains how the App accesses, uses, shares, stores, and protects information and is incorporated into these Terms by reference.

## 9. Fees

Unless a Marketplace listing or separate written agreement states otherwise, the App is provided without charge. You remain responsible for internet access, Google Workspace subscriptions, infrastructure, printing, third-party services, and other costs associated with your use.

We will disclose applicable App fees and material subscription terms before charging you.

## 10. Changes, availability, and support

We may modify, update, suspend, or discontinue all or part of the App. We do not promise uninterrupted availability, compatibility with every barcode format or scanner, or continued operation of third-party services.

Support is provided on a reasonable-efforts basis through the channels identified on the App’s help page. Do not send confidential User Content through a public GitHub issue.

## 11. Termination

You may stop using and uninstall the App at any time. We may suspend or terminate access if you materially violate these Terms, create security or legal risk, abuse the App or third-party services, or if continued operation is no longer practical.

Uninstalling the App does not remove formulas, URLs, images, or links already inserted into your spreadsheets. You must remove those items yourself.

Sections that by their nature should survive termination—including ownership, disclaimers, limitations of liability, indemnification, and dispute provisions—will survive.

## 12. Disclaimer of warranties

TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE APP IS PROVIDED **“AS IS”** AND **“AS AVAILABLE,”** WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY. WE DISCLAIM IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, ACCURACY, QUIET ENJOYMENT, AND WARRANTIES ARISING FROM COURSE OF DEALING OR USAGE OF TRADE.

WE DO NOT WARRANT THAT THE APP OR ANY GENERATED BARCODE WILL BE ERROR-FREE, SECURE, AVAILABLE, SCANNABLE, COMPLIANT WITH A PARTICULAR STANDARD, OR SUITABLE FOR YOUR PURPOSE. YOU ARE RESPONSIBLE FOR VALIDATION, BACKUPS, AND APPROPRIATE SAFEGUARDS.

Some jurisdictions do not allow certain warranty exclusions, so some exclusions may not apply to you.

## 13. Limitation of liability

TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE DEVELOPER AND CONTRIBUTORS WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOSS OF PROFITS, REVENUE, DATA, GOODWILL, BUSINESS OPPORTUNITIES, OR USE, ARISING FROM OR RELATED TO THE APP, EVEN IF ADVISED OF THE POSSIBILITY.

TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE TOTAL LIABILITY OF THE DEVELOPER AND CONTRIBUTORS FOR ALL CLAIMS ARISING FROM OR RELATED TO THE APP WILL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID THE DEVELOPER FOR THE APP DURING THE 12 MONTHS BEFORE THE EVENT GIVING RISE TO LIABILITY OR (B) US $100.

These limitations do not apply where prohibited by law and do not limit liability that cannot legally be limited.

## 14. Indemnification

To the extent permitted by law, if you use the App on behalf of a business or organization, that organization will defend, indemnify, and hold harmless the Developer and contributors from third-party claims, damages, liabilities, costs, and reasonable legal fees arising from its User Content, misuse of the App, or violation of these Terms or another person’s rights. This section does not apply to individual consumers where prohibited by law.

## 15. Governing law and disputes

These Terms are governed by the laws of **GOVERNING_LAW_JURISDICTION**, without regard to conflict-of-law principles. Courts located in **GOVERNING_LAW_JURISDICTION** will have exclusive jurisdiction over disputes, except where applicable consumer law provides otherwise.

Before filing a claim, each party agrees to make a good-faith effort to resolve the dispute informally by written notice and at least 30 days for a response.

## 16. Changes to these Terms

We may update these Terms to reflect changes to the App, law, security requirements, or business practices. The “Last updated” date identifies the latest revision. If a change materially affects your rights, we will provide notice when reasonably required. Continued use after an updated version becomes effective constitutes acceptance to the extent permitted by law.

## 17. General provisions

These Terms and the Privacy Policy form the agreement between you and the Developer concerning the App, except for any separate written agreement. If a provision is unenforceable, it will be modified to the minimum extent necessary or severed, and the remaining provisions will continue. Failure to enforce a provision is not a waiver. You may not assign these Terms without our consent; we may assign them in connection with a reorganization, transfer, or operation of law.

## 18. Contact

Questions about these Terms may be sent to:

**Noah Stephens**  
Email: **LEGAL_CONTACT_EMAIL**  
Repository: [github.com/NoahStephens/bwip-js-gs](https://github.com/NoahStephens/bwip-js-gs)

Do not submit private information through a public GitHub issue.

