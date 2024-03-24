import { Text, VStack } from '@chakra-ui/react';
import { Handle } from '@/components/helpers/handle';
import { GoBack } from '@/components/helpers/goBack';
import { formatAddress } from '@/utils/formatter';

export default function Index() {
  const address = "x2394aldsjfas"

  const copy = () => {
    navigator.clipboard.writeText(address)
  }

  return (
    <VStack w="full" h="full" py={2} px={{ base: 4, md: 20, xl: 40 }} zIndex={10}>
      <GoBack />
      <VStack w="full" spacing={6} alignItems={{ base: 'start', md: 'center' }}>
        <Text fontSize={{ base: 16, md: 25 }} fontWeight={600} textAlign="start">My Handles</Text>
        <VStack w="full" h="full" alignItems={{ base: 'start', md: 'center' }}>
          <Handle address={formatAddress(address)} name="@augustos" period="1year" copy={copy} />
        </VStack>
      </VStack>
    </VStack>
  )
}
