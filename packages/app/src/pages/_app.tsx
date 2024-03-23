import type { AppProps } from 'next/app';
import { Center, ChakraProvider, ColorModeScript, Container } from '@chakra-ui/react';
import { Header } from '../components/Header';
import '../theme/global.css';
import { defaultTheme } from '@/theme/default';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={defaultTheme}>
      <ColorModeScript initialColorMode='dark' />
      <Container
        w="full"
        maxW="full"
        h="100vh"
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
  )
}
