const fs = require("fs");
const path = "./messages/en.json";
const en = JSON.parse(fs.readFileSync(path));

en.About = {
  title: "About Us & Methodology",
  description:
    "Welcome to Aftara Tools, your free resource for premium online calculators and developer utilities.",
  missionTitle: "Our Mission",
  missionText:
    "Our mission is to provide fast, reliable, and privacy-respecting tools for everyday tasks. Whether you're a developer needing to encode a JWT, a homeowner calculating mulch volume, or just trying to figure out a discount, we've built a robust tool for you.",
  methodologyTitle: "Our Methodology",
  methodologyIntro:
    "We believe in transparency and accuracy, particularly for financial and health-related tools (Your Money or Your Life topics). Here is how we ensure our tools are reliable:",
  standardizedFormulasTitle: "Standardized Formulas",
  standardizedFormulasText:
    "All financial calculators (like ROI, Mortgages, and Loans) use industry-standard amortization and compound interest formulas.",
  medicalGuidelinesTitle: "Medical Guidelines",
  medicalGuidelinesText:
    "Health calculators (like BMI and BMR) use globally recognized equations, such as the Mifflin-St Jeor Equation for metabolic rate, and the standard WHO classifications for BMI.",
  privacyFirstTitle: "Privacy First",
  privacyFirstText:
    "Your data never leaves your browser. All calculations, hashing, and conversions happen locally on your device via JavaScript. We do not store or transmit your inputs.",
  continuousTestingTitle: "Continuous Testing",
  continuousTestingText:
    "Our toolkit is rigorously tested to ensure edge cases (like zero values or invalid inputs) are handled gracefully without crashing.",
  editorialGuidelinesTitle: "Editorial Guidelines",
  editorialGuidelinesText:
    "Every tool page is designed to be self-explanatory. We prioritize usability and clear instructions over cluttered interfaces. If an equation has limitations (like the Navy Body Fat method being an estimation), we clearly note it on the tool page.",
  disclaimer:
    "Disclaimer: The tools and calculators on this website are for informational and educational purposes only. They do not constitute professional financial or medical advice. Always consult with a qualified professional before making significant health or financial decisions.",
};

en.Contact = {
  title: "Contact Us",
  description:
    "We'd love to hear from you. Whether you have a question, a feature request, or found a bug, let us know!",
  formName: "Name",
  formEmail: "Email",
  formSubject: "Subject",
  formMessage: "Message",
  formSubmit: "Send Message",
  emailUs: "Email Us",
  emailAddress: "contact@100tools.example.com",
  responseTime: "We typically respond within 24-48 hours.",
  successMessage: "Thank you! Your message has been sent.",
  errorMessage: "Something went wrong. Please try again later.",
};

en.Privacy = {
  title: "Privacy Policy",
  lastUpdated: "Last Updated: September 29, 2026",
  intro:
    "At Aftara Tools, your privacy is our top priority. This Privacy Policy outlines how we handle (and explicitly do NOT handle) your personal data.",
  dataCollectionTitle: "No Data Collection",
  dataCollectionText:
    "We do not collect, store, or transmit any personal data when you use our calculators and tools. All computations—including formatting, decoding, and calculating—are performed strictly locally within your browser using JavaScript.",
  analyticsTitle: "Analytics & Tracking",
  analyticsText:
    "We may use privacy-friendly, anonymized analytics to understand general traffic patterns (like which tools are most popular). This data cannot be traced back to individual users and does not use intrusive tracking cookies.",
  thirdPartyTitle: "Third-Party Services",
  thirdPartyText:
    "Our website is hosted on modern edge networks. These infrastructure providers may log basic connection data (like IP addresses) for security and anti-DDoS purposes, which is standard practice for any website.",
  contactUs:
    "If you have any questions about this Privacy Policy, please contact us.",
};

en.Terms = {
  title: "Terms of Service",
  lastUpdated: "Last Updated: September 29, 2026",
  intro:
    "By accessing and using Aftara Tools, you agree to comply with and be bound by the following terms and conditions of use.",
  noWarrantyTitle: "No Warranties (As-Is)",
  noWarrantyText:
    'All tools, calculators, and information on this website are provided "as-is" without any representations or warranties, express or implied. We make no guarantees regarding the accuracy, reliability, or completeness of the results generated.',
  liabilityTitle: "Limitation of Liability",
  liabilityText:
    "In no event shall Aftara Tools be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever arising out of or in connection with the use of our tools. This includes financial losses or medical decisions made based on our calculators.",
  acceptableUseTitle: "Acceptable Use",
  acceptableUseText:
    "You agree to use our tools for lawful purposes only. You must not attempt to scrape, DDoS, or otherwise disrupt the service or networks connected to Aftara Tools.",
  modificationsTitle: "Modifications",
  modificationsText:
    "We reserve the right to revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these terms.",
};

en.Cookie = {
  title: "Cookie Policy",
  lastUpdated: "Last Updated: September 29, 2026",
  intro:
    "This Cookie Policy explains what cookies are and how we use them. You should read this policy so you can understand what type of cookies we use, or the information we collect using cookies and how that information is used.",
  whatAreCookiesTitle: "What are Cookies?",
  whatAreCookiesText:
    "Cookies are small text files that are placed on your computer or mobile device by websites that you visit. They are widely used to make websites work, or work more efficiently, as well as to provide reporting information.",
  howWeUseCookiesTitle: "How We Use Cookies",
  howWeUseCookiesText:
    'We use cookies strictly for essential functionality and basic user preferences. For example, we might use local storage or a cookie to remember if you prefer "Dark Mode" or "Light Mode", or to remember your preferred language.',
  noTrackingTitle: "No Invasive Tracking",
  noTrackingText:
    "We do not use advertising cookies, third-party trackers, or cross-site tracking technologies. Your use of our tools remains private.",
  managingCookiesTitle: "Managing Cookies",
  managingCookiesText:
    "You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.",
};

fs.writeFileSync(path, JSON.stringify(en, null, 2));
console.log("Successfully injected legal keys into en.json");
