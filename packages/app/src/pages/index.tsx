import { Box, Button, Center, Divider, HStack, Text, VStack } from '@chakra-ui/react';
// import { useWeb3Modal } from '@web3modal/wagmi/react';

export default function Page() {
  // const { open } = useWeb3Modal();

  return (
    <Center w="full" h="full" alignItems="start" zIndex={10}>
      {/* opt-out for a margin top, and items start, aiming better center in screen, counting the header size */}
      <VStack
        mt={{ base: '5rem', md: '13rem' }}
        textAlign="center"
        spacing={6}
        padding={{ base: 4, md: 0 }}
      >
        {/* <Button onClick={() => open()}>Connect Wallet</Button> */}
        <w3m-button />
        <Text
          className="bg-pan-tl"
          bgClip="text"
          fontWeight={700}
          fontSize={{ base: 35, md: 48 }}
          lineHeight={1}
          gap={2}
        >
          Your web3 username
        </Text>

        <Text fontSize={{ base: 12, md: 15 }} color={'text.700'}>
          Your identity across web3, one name for all your crypto addresses,
          <br />
          and your decentralised website.
        </Text>

        <Divider
          w="60%"
          h="1px"
          border="none"
          bgGradient="linear(to-r, #FFC010, #B24F18)"
        />
        <Box
          as="form"
          w="full"
          display="flex"
          flexDir="column"
          gap={4}
          // onSubmit={handleConfirmDomain}
        >
          {/*<SearchInput onChange={handleChangeDomain} errorMessage={undefined} available={domainIsAvailable} />*/}

          {/* Buttons */}
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
};
