import { graphql, useStaticQuery } from 'gatsby';
import { FixedObject } from 'gatsby-image';

export const useGetSocialImage = (): FixedObject => {
  const { file } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "social_image.png" }) {
          childImageSharp {
            fixed(width: 1200, height: 630) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    `
  );
  return file.childImageSharp.fixed;
};
