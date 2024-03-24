import { Box, Center, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { Connect } from '@/components/helpers/connect';
import { useAccount } from 'wagmi';

export const Container = () => {
  const router = useRouter()
  const { open } = useWeb3Modal()
  const { address } = useAccount()

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
      px={{ base: 2, md: 20, xl: 40 }}
      className="transition-all-05"
    >
      <Image src='/logo.svg' width={130} height={50} />
      <Box w="50%" maxW="160px">
        {
          address ? <w3m-button /> : <Connect onClick={() => open()} />
        }
      </Box>
    </Center>
  );
};
