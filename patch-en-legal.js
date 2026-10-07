const fs = require("fs");

const path = "./messages/en.json";
const data = JSON.parse(fs.readFileSync(path, "utf8"));

// 1. Update Privacy Policy for AdSense
data.Privacy.dataCollectionText =
  "We do not collect personal data unnecessarily. Computations happen locally. However, when using our site, basic connection data and cookies may be used by us and our third-party partners as described below.";
data.Privacy.thirdPartyTitle = "Third-Party Vendors & Google AdSense";
data.Privacy.thirdPartyText =
  "Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our sites and/or other sites on the Internet.";
data.Privacy.optOutTitle = "Opting Out of Personalized Ads";
data.Privacy.optOutText =
  "You may opt out of personalized advertising by visiting Google Ads Settings (https://myadcenter.google.com/). Alternatively, you can opt out of some third-party vendors' uses of cookies for personalized advertising by visiting www.aboutads.info.";
data.Privacy.userRightsTitle = "Your Privacy Rights (GDPR & CCPA)";
data.Privacy.userRightsText =
  "Depending on your location, you may have rights under the GDPR, CCPA/CPRA, or similar laws to access, delete, or restrict the processing of your data. You also have the right to opt out of the sale or sharing of your personal information. Use the 'Privacy settings' link in the footer to manage your consent.";
data.Privacy.childrenTitle = "Children's Privacy";
data.Privacy.childrenText =
  "Our services are not directed to children under 13, and we do not knowingly collect personal information from children.";
data.Privacy.dataRetentionTitle = "Data Retention";
data.Privacy.dataRetentionText =
  "Any temporary connection logs kept by our hosting providers are retained only as long as necessary for security and operational purposes.";

// 2. Update About Us for TODOs
data.About.teamTitle = "Who We Are";
data.About.teamText =
  "This site is operated by [TODO: Your Company Name / Your Name]. We are dedicated to providing high-quality tools to the public. If you need to reach us, please see our Contact page.";

// 3. Update Contact for TODOs
data.Contact.emailAddress = "[TODO: Your Email Address]";

// 4. Update Cookie Policy
data.Cookie.howWeUseCookiesText =
  "We use cookies for essential functionality, saving your preferences, and to serve relevant advertisements via third-party vendors like Google.";
data.Cookie.noTrackingTitle = "Third-Party Advertising Cookies";
data.Cookie.noTrackingText =
  "We use Google AdSense to fund our free tools. These third-party vendors use cookies to serve personalized ads. You can manage your preferences at any time using the Privacy Settings link in our footer.";

// 5. Create Disclaimer
data.Disclaimer = {
  title: "Disclaimer",
  lastUpdated: "Last Updated: September 29, 2026",
  intro:
    "The information and tools provided on Aftara Tools are for general informational and educational purposes only.",
  accuracyTitle: "General Accuracy",
  accuracyText:
    "While we strive to keep our calculators and converters up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the tools.",
  medicalTitle: "Medical & Health Disclaimer",
  medicalText:
    "Tools such as the BMI, Calorie, Macro, Body Fat, and Water Intake calculators provide estimates based on standard formulas. They are NOT a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider.",
  financialTitle: "Financial Disclaimer",
  financialText:
    "Calculators regarding loans, mortgages, EMI, investments, tax, and salary are for illustrative purposes only. They do not constitute financial advice. Actual rates, taxes, and terms will vary based on your specific institution and regional laws.",
  legalTitle: "Legal & Regional Variations",
  legalText:
    "Formulas may not reflect the precise legal or tax rules in your specific jurisdiction. Always consult a certified professional in your area before making any binding financial or legal decisions.",
};

// 6. Update Footer and Consent
if (!data.Footer) data.Footer = {};
data.Footer.disclaimer = "Disclaimer";
data.Footer.privacySettings = "Privacy Settings";

data.Consent = {
  title: "We value your privacy",
  description:
    "We and our partners use cookies to store and/or access information on your device. This is used to serve personalized ads and content, measure ad and content performance, and gain audience insights.",
  acceptAll: "Accept All",
  rejectAll: "Reject Non-Essential",
  managePreferences: "Manage Preferences",
  savePreferences: "Save Preferences",
  essentialCookies: "Essential Cookies (Required)",
  essentialCookiesDesc: "Necessary for the website to function properly.",
  analyticsCookies: "Analytics Cookies",
  analyticsCookiesDesc:
    "Help us understand how visitors interact with the site.",
  adCookies: "Advertising Cookies",
  adCookiesDesc:
    "Used by us and our partners (like Google) to serve personalized ads.",
};

fs.writeFileSync(path, JSON.stringify(data, null, 2));
console.log("Successfully patched en.json");
