import fs from 'fs';
import path from 'path';

const messagesEnPath = path.join(process.cwd(), 'messages', 'en.json');
const messages = JSON.parse(fs.readFileSync(messagesEnPath, 'utf8'));

messages.Page = {
  whatIs: "What is the {title}?",
  howToUse: "How to use the {title}",
  example: "Example",
  useCases: "Common Use Cases",
  howItWorks: "How it Works",
  faq: "Frequently Asked Questions",
  readyToStart: "Ready to start?",
  useToolNow: "Use Tool Now"
};

messages.Footer = {
  tagline: "The premium productivity platform for all your daily calculation, conversion, and generation needs.",
  popularTools: "Popular Tools",
  company: "Company",
  privacy: "Privacy Policy",
  terms: "Terms of Service",
  allRightsReserved: "All rights reserved.",
  builtWith: "Built with Next.js",
  madeWithHeart: "Made with ❤️"
};

messages.Categories = {
  developerTools: "Developer Tools",
  finance: "Finance",
  time: "Date & Time",
  text: "Text Tools",
  converters: "Converters"
};

fs.writeFileSync(messagesEnPath, JSON.stringify(messages, null, 2));
console.log("Updated en.json with Page, Footer, Categories");
