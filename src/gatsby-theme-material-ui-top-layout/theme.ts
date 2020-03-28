import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1a73e8',
      light: '#4fc3f7',
    },
    secondary: {
      main: '#232f3e',
      light: '#18202c',
    },
    background: {
      default: '#fafafa',
    },
    text: {
      primary: '#1b3a57',
    },
  },
});

/**
 * The theme for this app
 */
export default createMuiTheme({
  ...theme,
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1080,
      lg: 1440,
      xl: 1920,
    },
  },
});
