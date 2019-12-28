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
  typography: {
    h1: {
      ...theme.typography.h1,
      fontWeight: 400,
      fontSize: '4.625rem',
    },
    h2: {
      ...theme.typography.h1,
      fontWeight: 400,
      fontSize: '3.625rem',
    },
    h3: {
      ...theme.typography.h3,
      fontWeight: 500,
      fontSize: '2.625rem',
    },
    h4: {
      ...theme.typography.h4,
      fontWeight: 500,
      fontSize: '1.625rem',
    },
    h6: {
      ...theme.typography.h6,
      fontWeight: 500,
      fontSize: '1rem',
    },
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
    MuiAppBar: {
      elevation: 0,
    },
    MuiMenu: {
      elevation: 1,
    },
    MuiButton: {
      disableRipple: true,
      disableTouchRipple: true,
      disableFocusRipple: true,
    },
    MuiIconButton: {
      disableRipple: true,
      disableTouchRipple: true,
      disableFocusRipple: true,
    },
    MuiCheckbox: {
      disableRipple: true,
      disableTouchRipple: true,
      disableFocusRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: theme.spacing(6),
    },
  },
  transitions: {
    duration: {
      enteringScreen: 525,
      leavingScreen: 395,
    },
  },
  overrides: {
    MuiDialog: {
      paper: {
        backgroundColor: theme.palette.background.default,
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
        '&:hover': {
          boxShadow: 'none',
        },
      },
      sizeLarge: {
        height: theme.spacing(8),
      },
    },
    MuiTabs: {
      root: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        height: theme.spacing(6),
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.primary.main,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        marginTop: 0,
        marginBottom: 0,
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
          minWidth: 0,
        },
        '&$selected': {
          color: theme.palette.primary.main,
          fontWeight: theme.typography.fontWeightMedium,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: theme.spacing(4),
        height: theme.spacing(4),
      },
    },
    MuiAppBar: {
      root: {
        opacity: 0.97,
      },
      colorPrimary: {
        backgroundColor: theme.palette.common.white,
      },
      colorDefault: {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.default,
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1) / 2,
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: theme.palette.grey[300],
      },
    },
    MuiListItemText: {
      primary: {
        ...theme.typography.body2,
      },
    },
    MuiMenuItem: {
      root: {
        ...theme.typography.body2,
        minHeight: theme.spacing(5),
      },
    },
    MuiCheckbox: {
      root: {
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
      colorPrimary: {
        '&$checked': {
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  },
});
