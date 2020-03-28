import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';

/*
 * The Seo for each page
 */
export const Seo: FunctionComponent<SeoProps> = (props) => {
  return (
    <Helmet
      htmlAttributes={{ lang: props.lang }}
      title={props.title}
      meta={[
        {
          name: 'description',
          content: props.description,
        },
        {
          property: 'og:title',
          content: props.title,
        },
        {
          property: 'og:description',
          content: props.description,
        },
        {
          property: 'og:image',
          content: `${props.imgSrc}`,
        },
        {
          property: 'og:image:alt',
          content: props.title,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:locale',
          content: `${props.lang}`,
        },
        {
          property: 'og:url',
          content: `${props.url}`,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: props.title,
        },
        {
          name: 'twitter:image',
          content: `${props.imgSrc}`,
        },
        {
          name: 'twitter:description',
          content: props.description,
        },
        {
          name: 'keywords',
          content: props.keywords,
        },
      ]}
    />
  );
};

interface SeoProps {
  /**
   * The current page lang
   */
  lang: string;
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
  /**
   * The current page address
   */
  url: string;
  /**
   * social media pciture address
   */
  imgSrc: string;
}
