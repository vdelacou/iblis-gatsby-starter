import { graphql, useStaticQuery } from 'gatsby';

interface ISiteMetadata {
  siteUrl: string;
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
  return site.siteMetadata;
};
