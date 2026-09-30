export const adsConfig = {
  enabled: process.env.NEXT_PUBLIC_ADS_ENABLED === 'true',
  publisherId: process.env.NEXT_PUBLIC_ADS_PUBLISHER_ID || "",
  slots: {
    top: process.env.NEXT_PUBLIC_ADS_SLOT_TOP || "",
    content: process.env.NEXT_PUBLIC_ADS_SLOT_CONTENT || "",
    bottom: process.env.NEXT_PUBLIC_ADS_SLOT_BOTTOM || "",
  }
};
