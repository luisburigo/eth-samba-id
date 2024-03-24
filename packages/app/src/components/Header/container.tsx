import { Center, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export const Container = () => {

  return (
    <Center
      as="header"
      w="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
      py={2}
      px={{ base: 0, md: 20, xl: 40 }}
      className="transition-all-05"
    >
      <w3m-button />
    </Center>
  );
};
