import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#7209b7',
    },
    secondary: {
      main: '#f72585',
    },
    error: {
      main: red[400],
    },
  },
});

export default theme;
