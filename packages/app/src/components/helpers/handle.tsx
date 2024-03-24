import { Box, Text, VStack } from '@chakra-ui/react';

interface HandleProps {
  address: string,
  name: string,
  period: string,
  copy: () => void
}

export const Handle = ({ address, name, period, copy }: HandleProps) => {

  return (
    <VStack p={2} w="full" bg="#201f1d" maxW="340px" rounded={8}>
      <Text fontWeight={600} fontSize={{ base: 15, md: 17 }}>{name}</Text>
      <Box display="flex" w="full" px={4} justifyContent="space-between">
        <Text color="grey.300" fontSize={{ base: 12, md: 15 }}>Expires in {period}</Text>
        <Box display="flex" gap={2}>
          <Text color="grey.200" fontSize={{ base: 12, md: 15 }}>{address}</Text>
          <button onClick={copy}>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_13437_7825)">
                <path
                  d="M5.16536 4.66634V1.99967C5.16536 1.82286 5.2356 1.65329 5.36063 1.52827C5.48565 1.40325 5.65522 1.33301 5.83203 1.33301H14.4987C14.6755 1.33301 14.8451 1.40325 14.9701 1.52827C15.0951 1.65329 15.1654 1.82286 15.1654 1.99967V10.6663C15.1654 10.8432 15.0951 11.0127 14.9701 11.1377C14.8451 11.2628 14.6755 11.333 14.4987 11.333H11.832V13.995C11.832 14.3657 11.5327 14.6663 11.1607 14.6663H2.50336C2.41518 14.6664 2.32784 14.6491 2.24635 14.6154C2.16486 14.5817 2.09082 14.5323 2.02846 14.4699C1.96611 14.4076 1.91666 14.3335 1.88296 14.252C1.84925 14.1705 1.83194 14.0832 1.83203 13.995L1.83403 5.33767C1.83403 4.96701 2.13336 4.66634 2.50536 4.66634H5.16536ZM6.4987 4.66634H11.1607C11.5314 4.66634 11.832 4.96567 11.832 5.33767V9.99967H13.832V2.66634H6.4987V4.66634ZM3.16736 5.99967L3.16536 13.333H10.4987V5.99967H3.16736Z"
                  fill="#CFCCC9" />
              </g>
              <defs>
                <clipPath id="clip0_13437_7825">
                  <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </Box>
      </Box>
    </VStack>
  )
}
