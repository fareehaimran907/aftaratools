export const AdConfig = {
  // Master switch (controlled by NEXT_PUBLIC_ADSENSE_CLIENT_ID)
  enabled: !!process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID,
  clientId: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "",

  placements: {
    // Homepage
    home: {
      belowHero: true,
      aboveFooter: true,
    },
    // Category listing pages
    category: {
      belowTitle: false, // Too close to navigation usually
      betweenToolCards: true,
      aboveFooter: true,
    },
    // Individual Tool pages
    tool: {
      belowTitle: false, // Google policy: don't push content down
      sidebar: true,     // If layout has a sidebar
      belowToolWorkspace: true, // Safe distance below Calculate buttons
      aboveFaq: true,
      aboveFooter: true,
    },
    // Legal/Trust pages (Contact, Privacy, Terms, Disclaimer, About)
    // Google policy: minimal/no ads on utility pages
    utilityPages: false,
  }
};
