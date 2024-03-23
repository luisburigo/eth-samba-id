import { Center, Container } from '@chakra-ui/react';
import { Outlet } from '@tanstack/react-router';
import { Header } from '../components/Header';
import '../theme/global.css';

export const Layout = () => {
  return (
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
        <Outlet />
      </Center>
      {/*<TanStackRouterDevtools />*/}
    </Container>
  );
};
