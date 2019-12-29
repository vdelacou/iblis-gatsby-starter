import { Container } from '@material-ui/core';
import { PageRendererProps } from 'gatsby';
import React, { Fragment, FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Box } from '../components/box';
import { NotFound } from '../components/not_found';
import { Seo } from '../components/seo';
import { useGetSocialImage } from '../hooks/images';
import { useSiteMetadata } from '../hooks/site_metadata';

const PageNotFound: FunctionComponent<PageRendererProps> = props => {
  const intl = useIntl();
  const imageSocial = useGetSocialImage();
  const siteMetadata = useSiteMetadata();
  return (
    <Fragment>
      <Seo
        lang={intl.locale}
        title={intl.formatMessage({ id: 'pages.index.seo.title' })}
        description={intl.formatMessage({ id: 'pages.index.seo.description' })}
        keywords={intl.formatMessage({ id: 'pages.index.seo.keywords' })}
        origin={siteMetadata.siteUrl}
        href={`${siteMetadata.siteUrl}${props.location.pathname}`}
        imgSrc={imageSocial.src}
      />
      <Box py={6}>
        <Container maxWidth="sm">
          <Box justifyContent={'center'} py={6}>
            <NotFound />
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
};

export default PageNotFound;
