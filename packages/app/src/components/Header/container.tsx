import { Center, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export const Container = () => {
  const router = useRouter()

  const goHome = () => {
    router.push('/').then();
  };

  return (
    <Center
      as="header"
      w="full"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py={2}
      px={{ base: 0, md: 20, xl: 40 }}
      className="transition-all-05"
    >
      <button onClick={goHome}>
        <Image src="./symbol.svg" width={190} height={75} alt="Bako logo" />
      </button>
      <w3m-button />
    </Center>
  );
};
