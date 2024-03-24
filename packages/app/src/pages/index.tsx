import { Box, Button, Center, HStack, Text, VStack } from '@chakra-ui/react';
import { Home } from '@/components/Home';
import { Input } from '@/components/input';

export default function Page() {

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
          // onSubmit={handleConfirmDomain}
        >
          <Input.SearchDomain onChange={() => null} errorMessage={undefined} available={null} />
          <VStack w="full" display="flex" flexDir="column" gap={2}>
            <Button
              w="full"
              type="submit"
              // isLoading={resolveDomainMutation.isPending}
              // isDisabled={domain.length < 3 || resolveDomainMutation.isPending}
              background="button.500"
              color="background.500"
              fontSize={14}
              _hover={{ bgColor: 'button.600' }}
            >
              {/*{ domainIsAvailable ? 'Buy Domain' : 'Check domain' }*/}
              Check domain
            </Button>
            <HStack
              cursor="pointer"
              onClick={() =>
                window.open('https://twitter.com/bakoidentity', '_blank')
              }
              alignSelf="flex-end"
            >
              <Text fontSize={11} color="yellow-medium" fontWeight={'bold'}>
                Learn more
              </Text>
              {/*<Image w={4} src={Assets.arrowShare} />*/}
            </HStack>
          </VStack>
        </Box>
      </VStack>
    </Center>
  );
}

