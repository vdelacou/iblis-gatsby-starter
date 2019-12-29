import { Container, Typography } from '@material-ui/core';
import { PageRendererProps } from 'gatsby';
import React, { Fragment, FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Box } from '../components/box';
import { Seo } from '../components/seo';
import { useGetSocialImage } from '../hooks/images';
import { useSiteMetadata } from '../hooks/site_metadata';

const Index: FunctionComponent<PageRendererProps> = props => {
  const intl = useIntl();
  const imageSocial = useGetSocialImage();
  const siteMetadata = useSiteMetadata();
  const siteUrl = new URL(siteMetadata.siteUrl);
  return (
    <Fragment>
      <Seo
        lang={intl.locale}
        title={intl.formatMessage({ id: 'pages.index.seo.title' })}
        description={intl.formatMessage({ id: 'pages.index.seo.description' })}
        keywords={intl.formatMessage({ id: 'pages.index.seo.keywords' })}
        url={`${siteUrl.origin}${props.location.pathname}`}
        imgSrc={`${siteMetadata.siteUrl}${imageSocial.src}`}
      />

      <Box p={6}>
        <Container maxWidth="sm">
          <Typography variant={'h1'}>{intl.formatMessage({ id: 'pages.index.title' })}</Typography>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Index;
