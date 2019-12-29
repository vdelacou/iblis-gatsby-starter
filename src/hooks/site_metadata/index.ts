import { graphql, useStaticQuery } from 'gatsby';

interface ISiteMetadata {
  origin: string;
}

export const useSiteMetadata = (): ISiteMetadata => {
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
