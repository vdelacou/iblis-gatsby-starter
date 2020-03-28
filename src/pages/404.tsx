import { Box, Container, CssBaseline } from '@material-ui/core';
import { PageRendererProps } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import React, { FC } from 'react';
import { NotFound } from '../components/not_found';
import { Seo } from '../components/seo';
import { useGetSocialImage } from '../hooks/images';
import { useSiteMetadata } from '../hooks/site_metadata';

const Page: FC<PageRendererProps> = (props) => {
  const intl = useIntl();
  const imageSocial = useGetSocialImage();
  const siteMetadata = useSiteMetadata();

  return (
    <>
      <Seo
        lang={intl.locale}
        title={intl.formatMessage({ id: 'pages.404.seo.title' })}
        description={intl.formatMessage({ id: 'pages.404.seo.description' })}
        keywords={intl.formatMessage({ id: 'pages.404.seo.keywords' })}
        url={`${siteMetadata.origin}${props.location.pathname}`}
        imgSrc={`${siteMetadata.origin}${imageSocial.src}`}
      />
      <CssBaseline />
      <Box py={6}>
        <Container maxWidth="sm">
          <Box justifyContent="center" py={6}>
            <NotFound />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Page;
