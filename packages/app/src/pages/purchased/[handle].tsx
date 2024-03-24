import { CheckoutCard } from '@/components/helpers/checkoutCard';
import { Box, Button, Center, HStack, Image, Text } from '@chakra-ui/react';
import { TwitterShareButton } from 'react-share';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useReadContract } from 'wagmi';
import { identityAbi } from '@/config/abi';
import { CONTRACT } from '@/config/addresses/contracts';
import { GoBack } from '@/components/helpers/goBack';

export default function Purchased(){
  const router = useRouter()
  console.debug(router.query)
  const { handle } = router.query
  if(!handle) return null
  console.debug(handle)
  // const [data, setData] = useState(null)

  const { data } = useReadContract({
    abi: identityAbi,
    address: CONTRACT.IDENTITY,
    functionName: 'getIdentity',
    args: [handle],
  });

  useEffect(() => {

    if(data?.name?.length <= 0) {
      router.push('/').then()
    } else {
      // setData(data)
    }

  }, [])

  return (
    <Center w="full" h="full" display="flex" flexDir="column" py={2} px={{ base: 4, md: 20, xl: 40 }} zIndex={10}>
      <GoBack />
      <Box w="fit-content" h="full" pt="6rem" display='flex' flexDir='column' alignItems='center' gap={3}>
        <Box display='flex' flexDir="column" gap={6} justifyContent="center" alignItems='center' mb={8}>
          <Text
            className="bg-pan-tl"
            bgClip="text"
            fontWeight={700}
            fontSize={{ base: 35, md: 50 }}
            lineHeight={1}
            gap={2}
          >
            Congratulations
          </Text>
          <Text fontSize='sm'> You have secured your Handles! </Text>
        </Box>

        <CheckoutCard domain={handle as string} />

        <HStack marginTop="2rem" gap={4} pb={10}>
          <Button
            style={{
              backgroundColor: "inherit",
              color: "white",
              fontSize: "16px",
              border: "1px solid white",
              width: "153px",
              opacity: "0.3"
            }}
            disabled={true}
            // onClick={() => setFormStep(LIST_DOMAINS)}
          >
            Go to my handle
          </Button>

          <TwitterShareButton
            url="http://localhost:5173/"
            title="Create your web3 handle!"
            hashtags={["web3", "legacydomains"]}
            related={[]}
          >
            <Button
              backgroundColor="yellow-light"
              color="black"
              display="flex"
              alignItems="center"
              width="153px"
              gap={2}
              _hover={{ bgColor: "button.600" }}
            >
              <Image src="/x-logo.svg" />
              Share
            </Button>
          </TwitterShareButton>
        </HStack>
      </Box>
    </Center>
  )
}
