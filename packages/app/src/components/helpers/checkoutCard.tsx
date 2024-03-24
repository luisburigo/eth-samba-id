import { Box, Image, Text, VStack } from '@chakra-ui/react';

interface CardProps {
  domain: string;
}

export function CheckoutCard({ domain }: CardProps) {
  return (
    <Box
      border="4px solid #FFC010"
      borderRadius="4px"
      aspectRatio={1}
      minW="220px"
      padding="1rem"
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      pt="3rem"
      backgroundImage={`url(/texture.svg)`}
      backgroundRepeat="repeat"
    >
      <Image
        src="/symbol.svg"
        w="5rem"
        height="5rem"
      />
      <VStack
        alignItems="center"
        color="white"
        height="100%"
        width="100%"
        justifyContent="flex-start"
        textAlign="center"
        fontSize="22px"
        fontWeight={600}
      >
        <Text fontSize={'xxl'}>
          <span
            style={{
              color: '#fdc940'
            }}
          >
            @
          </span>
          {domain}
        </Text>
      </VStack>
    </Box>
  );
}
