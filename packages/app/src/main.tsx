import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { defaultTheme } from './theme/default.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={defaultTheme}>
      <ColorModeScript initialColorMode='dark' />
      <p>Hi</p>
    </ChakraProvider>
  </React.StrictMode>,
)
