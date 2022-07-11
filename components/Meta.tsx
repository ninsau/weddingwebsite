import Head from "next/head";
type Meta = {
  title?: string | null;
  description?: string | null;
  image?: string | null;
  url?: string | null;
};

const BRAND_DESCRIPTION =
  "We joyfully request the pleasure of your company as we speak our vows and join in marriage in the presence of family and friends.";
const BRAND_IMAGE = "/couple.JPG";
const BRAND_NAME = "CSTHEMOMENT";
const BRAND_TAGLINE =
  "We joyfully request the pleasure of your company as we speak our vows and join in marriage in the presence of family and friends.";
const BRAND_URL = "https://csththemoment.com";

const MetaComponent = ({ title, description, image, url }: Meta) => {
  return (
    <>
      <Head>
        <title>{title || BRAND_NAME}</title>

        <meta name="title" content={BRAND_TAGLINE} />
        <meta name="description" content={description || BRAND_DESCRIPTION} />

        <meta
          name="google-site-verification"
          content="sSptwoLmfmCDsOmhdYVomW_kcMKEZu4ckCfUEROyemk"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url || BRAND_URL} />
        <meta property="og:title" content={title || BRAND_TAGLINE} />
        <meta
          property="og:description"
          content={description || BRAND_DESCRIPTION}
        />
        <meta property="og:image" content={image || BRAND_IMAGE} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url || BRAND_URL} />
        <meta property="twitter:title" content={title || BRAND_TAGLINE} />
        <meta
          property="twitter:description"
          content={description || BRAND_DESCRIPTION}
        />
        <meta property="twitter:image" content={image || BRAND_IMAGE} />
      </Head>
    </>
  );
};

export default MetaComponent;
