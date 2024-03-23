import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';;
import { defaultTheme } from './theme/default.ts';;
import Web3ModalProvider from './providers/walletConnector/connectProvider.tsx';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Web3ModalProvider>
      <ChakraProvider theme={defaultTheme}>
      <ColorModeScript initialColorMode='dark' />
      <App />
    </ChakraProvider>
    </Web3ModalProvider>
  </React.StrictMode>
);
