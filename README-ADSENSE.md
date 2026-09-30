# AdSense Implementation & Activation Guide

This site has been built to strictly comply with Google AdSense Publisher Policies, including Core Web Vitals, Consent Management (via Google Consent Mode v2), layout stability (CLS prevention), and proper ad placement separation.

## 🛑 Important: DO NOT ACTIVATE ADS YET
Ads are currently **disabled** by default to prevent triggering invalid traffic or layout flags before approval. Follow these steps exactly when you are ready.

---

### Step 1: Apply for AdSense
1. Go to [Google AdSense](https://adsense.google.com) and sign in.
2. Add this website using your custom domain (e.g., `https://yourdomain.com`). **Do not use a free Vercel subdomain.**
3. Go to the **Sites** tab and copy your `Publisher ID` (looks like `pub-XXXXXXXXXXXXXXXX`) and your `Client ID` (looks like `ca-pub-XXXXXXXXXXXXXXXX`).

### Step 2: Update `ads.txt`
1. Open `public/ads.txt`.
2. Replace `pub-XXXXXXXXXXXXXXXX` with your actual Publisher ID.
   *Example: `google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0`*
3. Deploy this change so the file is accessible at `https://yourdomain.com/ads.txt`.

### Step 3: Configure Consent Management Platform (CMP)
For EEA, UK, and Swiss users, Google strictly requires a **certified CMP**.
1. In the AdSense Dashboard, go to **Privacy & Messaging**.
2. Create a GDPR and CCPA consent message using Google's Funding Choices.
3. This is free, tightly integrated, and satisfies Google's certification requirement.
4. *Note: We have implemented a fallback custom banner (`ConsentBanner.tsx`) that works via Google Consent Mode v2 for users outside these regions or if the certified CMP fails to load.*

### Step 4: Add Your Environment Variables
Once you are approved (or to test the verification script), add your Client ID to your Vercel/host environment variables:

```bash
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX
```

When this variable is present, the `<AdSenseLoader />` in `src/app/[locale]/layout.tsx` will automatically insert the Google verification tag in the `<head>` of all pages, and the `AdSlot` components will switch from dev-mode placeholders to actual Google Ads.

### Step 5: Ad Placement Configuration
Ads are configured dynamically. To prevent accidental policy violations on utility pages or above the fold, use the `AdConfig` object.

1. Open `src/config/ads.ts`.
2. Toggle true/false depending on where you want the AdSlots to appear.
   - Example: `tool.aboveFaq: true`

### ⚠️ Manual Action Checklist Before Submitting:
- [ ] You must be 18+ to create an AdSense account.
- [ ] Go to `messages/en.json` (and all other locales) and replace all instances of `[TODO: Your Email Address]` and `[TODO: Your Company Name / Your Name]` with your actual information in the `About` and `Contact` nodes.
- [ ] Ensure your site ownership is verified in Google Search Console and the sitemap is submitted.
- [ ] Wait for the review to complete. **DO NOT click your own ads** once they are live!
