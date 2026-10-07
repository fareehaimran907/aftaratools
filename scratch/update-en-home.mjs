import fs from "fs";
import path from "path";

const messagesEnPath = path.join(process.cwd(), "messages", "en.json");
const messages = JSON.parse(fs.readFileSync(messagesEnPath, "utf8"));

messages.Home = {
  metaTitle: "Aftara Tools - Premium Free Online Tools",
  metaDescription:
    "Calculate, convert, generate and analyze everything you need with our suite of 100+ premium online tools.",
  heroBadge: "100+ Free Online Tools",
  heroTitle1: "Calculate, convert &",
  heroTitle2: "generate everything.",
  heroDescription:
    "The premium productivity platform for developers, finance professionals, and everyday tasks. Fast, private, and beautifully designed.",
  popular: "Popular:",
  browseCategories: "Browse Categories",
  browseCategoriesDesc: "Find exactly what you need organized by workflow.",
  mostPopularTools: "Most Popular Tools",
  mostPopularToolsDesc: "The tools our community uses most frequently.",
  exploreAll: "Explore All",
  whyUse: "Why use Aftara Tools?",
  whyUseDesc:
    "Built with modern technology to provide the best user experience.",
  feature1Title: "Lightning Fast",
  feature1Desc:
    "Instant results without page reloads. Optimized for speed and low latency.",
  feature2Title: "Privacy First",
  feature2Desc:
    "Calculations happen directly in your browser. Your data never leaves your device.",
  feature3Title: "Premium Design",
  feature3Desc:
    "Carefully crafted interfaces that are beautiful, intuitive, and easy to use.",
};

fs.writeFileSync(messagesEnPath, JSON.stringify(messages, null, 2));
console.log("Updated en.json with Home page strings");
