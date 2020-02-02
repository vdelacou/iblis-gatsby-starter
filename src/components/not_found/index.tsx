import { Grid, useTheme } from '@material-ui/core';
import { SvgPageNotFound } from 'iblis-react-undraw';
import React, { FunctionComponent } from 'react';

/*
 * Display Not Found Picture
 */
export const NotFound: FunctionComponent = () => {
  const theme = useTheme();

  return (
    <Grid container alignItems="center" justify="center">
      <Grid item xs={10}>
        <SvgPageNotFound primarycolor={theme.palette.primary.main} height={theme.spacing(25)} />
      </Grid>
    </Grid>
  );
};
