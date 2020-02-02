import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  );
  const siteUrl = new URL(site.siteMetadata.siteUrl);
  return { origin: siteUrl.origin };
};

interface SiteMetadata {
  origin: string;
}
