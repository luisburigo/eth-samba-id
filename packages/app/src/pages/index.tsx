import { Button, Center, FormControl, VStack } from '@chakra-ui/react';
import { Home } from '@/components/Home';
import { Input } from '@/components/input';
import { identityAbi } from '@/config/abi';
import { CONTRACT } from '@/config/addresses/contracts';
import { useReadContract } from 'wagmi';
import { useState } from 'react';
import { useRouter } from 'next/router';

const checkDomain = (domain: string) => {
  const regex = /^[a-zA-Z0-9]+$/;
  return regex.test(domain);
};

export default function Page() {
  const router = useRouter();

  const [input, setInput] = useState('')
  const [errorMessage, setErrorMessage] = useState<string | undefined>(null)

  const { data, isLoading } = useReadContract({
    abi: identityAbi,
    address: CONTRACT.IDENTITY,
    functionName: 'getIdentity',
    args: [input],
  });

  const searchDomain = () => {
    if (data?.name?.length <= 0) {
      router.push(`/form`)
    } else {
      router.push(`/profile/${data?.name}`)
    }
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) {
      setErrorMessage(null)
      setInput(e.target.value)
    }
    if(!checkDomain(e.target.value)) {
      setErrorMessage("Special Characters are not allowed.")
      return
    }
    setErrorMessage(undefined)
    setInput(e.target.value)
  }

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
        <FormControl
          w="full"
          display="flex"
          flexDir="column"
          gap={4}
        >
          <Input.SearchDomain onChange={handleInput} errorMessage={errorMessage} available={null} />
          <VStack w="full" display="flex" flexDir="column" gap={2}>
            <Button
              w="full"
              isLoading={isLoading}
              isDisabled={input.length < 3 || isLoading}
              background="button.500"
              color="background.500"
              fontSize={14}
              _hover={{ bgColor: 'button.600' }}
              onClick={searchDomain}
            >
              {/* @ts-ignore */}
              {/*{ data?.name?.length <= 0  ? 'Buy Domain' : 'Check domain' }*/}
              Check Domain
            </Button>

          </VStack>
        </FormControl>
      </VStack>
    </Center>
  );
}

