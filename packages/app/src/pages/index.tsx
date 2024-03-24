import { Box, Button, Center, HStack, Text, VStack } from '@chakra-ui/react';
import { Home } from '@/components/Home';
import { Input } from '@/components/input';
import { identityAbi } from '@/config/abi';
import { CONTRACT } from '@/config/addresses/contracts';
import { useReadContract } from 'wagmi';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();

  const [input, setInput] = useState('')

  const {data, isLoading} = useReadContract({
    abi: identityAbi,
    address: CONTRACT.IDENTITY,
    functionName: 'getIdentity',
    args: [input as string],
  });


  return (
    <Center w="full" h="full" alignItems="start" zIndex={10}>
      <VStack
        mt={{ base: '5rem', md: '13rem' }}
        textAlign="center"
        spacing={6}
        padding={{ base: 4, md: 0 }}
        maxW="30rem"
      >
        <Home.Hero title="Your web3 username" description="Your identity across web3, one name for all your crypto addresses, and your decentralised website." />
        <Box
          as="form"
          w="full"
          display="flex"
          flexDir="column"
          gap={4}
        >
          <Input.SearchDomain onChange={(e) => {
            setInput(e.target.value)
          }} errorMessage={undefined} available={null} />
          <VStack w="full" display="flex" flexDir="column" gap={2}>
            <Button
              w="full"
              isLoading={isLoading}
              isDisabled={input.length < 3 || isLoading}
              background="button.500"
              color="background.500"
              fontSize={14}
              _hover={{ bgColor: 'button.600' }}
              onClick={
                () => {
                  // @ts-ignore
                  if (data?.name?.length <= 0) {
                    router.push(`/form`)
                  } else {
                    router.push(`/profile/${data?.name}`)
                  }
                }
              }
            >
              {/* @ts-ignore */}
              { data?.name?.length <= 0  ? 'Buy Domain' : 'Check domain' }
            </Button>

          </VStack>
        </Box>
      </VStack>
    </Center>
  );
}

