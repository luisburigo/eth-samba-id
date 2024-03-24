import type { AppProps } from 'next/app';
import {
  Center,
  ChakraProvider,
  ColorModeScript,
  Container,
} from '@chakra-ui/react';
import { Header } from '../components/Header';
import '../theme/global.css';
import { defaultTheme } from '@/theme/default';
import Web3ModalProvider from '@/providers/walletConnector/connectProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3ModalProvider>
      <ChakraProvider theme={defaultTheme}>
        <ColorModeScript initialColorMode="dark" />
        <Container
          w="full"
          maxW="full"
          minH="100vh"
          bgColor="background.500"
          display="flex"
          flexDir="column"
          padding={0}
          overflow="hidden"
        >
          <Header.Container />
          <Center position="relative" w="full" h="full" overflowX="hidden">
            <Component {...pageProps} />
          </Center>
          {/*<TanStackRouterDevtools />*/}
        </Container>
      </ChakraProvider>
    </Web3ModalProvider>
  );
}
