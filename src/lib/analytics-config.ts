/** Google Ads global site tag (AW-…) — herkese açık, HTML'de görünür */
export const googleAdsId =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "AW-18245342278";

/** Google Ads dönüşüm etiketi (send_to: AW-…/LABEL) */
export const googleAdsConversionLabel =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL ??
  "8TAYCP-ewMccEFadh_xB";

export const googleAdsConversionSendTo = `${googleAdsId}/${googleAdsConversionLabel}`;

export const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
