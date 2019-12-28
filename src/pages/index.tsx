import { Container, Typography } from '@material-ui/core';
import React, { Fragment, FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Box } from '../components/box';
import { Seo } from '../components/seo';

const Index: FunctionComponent = () => {
  const intl = useIntl();
  return (
    <Fragment>
      <Seo
        title={intl.formatMessage({ id: 'pages.index.seo.title' })}
        description={intl.formatMessage({ id: 'pages.index.seo.description' })}
        keywords={intl.formatMessage({ id: 'pages.index.seo.keywords' })}
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
