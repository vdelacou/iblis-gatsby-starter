import { Location } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';
import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import { useIntl } from 'react-intl';

/*
 * The Seo for each page
 */
export const Seo: FunctionComponent<ISeoProps> = props => {
  const dataSeo = useStaticQuery(seoQuery);
  const intl = useIntl();
  return (
    <Location>
      {({ location }) => (
        <Helmet
          htmlAttributes={{ lang: intl.locale }}
          title={props.title}
          meta={[
            {
              name: `description`,
              content: props.description,
            },
            {
              property: `og:title`,
              content: props.title,
            },
            {
              property: `og:description`,
              content: props.description,
            },
            {
              property: `og:image`,
              content: `${location.origin}${dataSeo.file.childImageSharp.fixed.src}`,
            },
            {
              property: `og:image:alt`,
              content: props.title,
            },
            {
              property: `og:type`,
              content: `website`,
            },
            {
              property: `og:locale`,
              content: `${intl.locale}`,
            },
            {
              property: `og:url`,
              content: `${location.href}`,
            },
            {
              name: `twitter:card`,
              content: `summary_large_image`,
            },
            {
              name: `twitter:title`,
              content: props.title,
            },
            {
              name: `twitter:image`,
              content: `${location.origin}${dataSeo.file.childImageSharp.fixed.src}`,
            },
            {
              name: `twitter:description`,
              content: props.description,
            },
            {
              name: `keywords`,
              content: props.keywords,
            },
          ]}
        />
      )}
    </Location>
  );
};

interface ISeoProps {
  /**
   * The title for SEO
   */
  title: string;
  /**
   * The description for SEO
   */
  description: string;
  /**
   * The keywords for SEO, separated by comma
   */
  keywords: string;
}

const seoQuery = graphql`
  query {
    file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fixed(width: 1200, height: 630) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
