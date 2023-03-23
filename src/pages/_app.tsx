import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { createTheme } from '@mui/material/styles';

import { red } from '@mui/material/colors';
import { render } from 'react-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { ThemeProvider } from '@mui/material/styles';

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

export const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19f546',
    },
    error: {
      main: red.A400,
    },
  },
});


//NOTE: Don't use <StyledEngineProvider injectFirst/>
// render(
//   <CacheProvider value={muiCache}>
//     <ThemeProvider theme={myTheme}>
//       <Root />
//     </ThemeProvider>
//   </CacheProvider>,
//   document.getElementById('root'),
// );


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={muiCache}>
        <Component {...pageProps} />
      </CacheProvider>
    </ThemeProvider>
  // <Component {...pageProps} />
  )
}
