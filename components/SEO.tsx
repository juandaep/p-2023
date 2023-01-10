import Head from "next/head";
import { useRouter } from "next/router";
import siteMetaData from "@/data/siteMetadata";

interface SEOProps {
  title: string;
  description: string;
  ogType: string;
}

const SEO = ({ title, description }: SEOProps) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        property="og:url"
        content={`${siteMetaData.siteUrl}${router.asPath}`}
      />
    </Head>
  );
};

interface SEOPageProps {
  title: string;
  description: string;
}

export const SEOPage = ({ title, description }: SEOPageProps) => {
  return <SEO title={title} description={description} ogType="website" />;
};
