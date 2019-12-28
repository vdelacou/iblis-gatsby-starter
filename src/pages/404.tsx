import { Container } from '@material-ui/core';
import React, { Fragment, FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Box } from '../components/box';
import { NotFound } from '../components/not_found';
import { Seo } from '../components/seo';

const PageNotFound: FunctionComponent = () => {
  const intl = useIntl();
  return (
    <Fragment>
      <Seo
        title={intl.formatMessage({ id: 'pages.404.seo.title' })}
        description={intl.formatMessage({ id: 'pages.404.seo.description' })}
        keywords={intl.formatMessage({ id: 'pages.404.seo.keywords' })}
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
