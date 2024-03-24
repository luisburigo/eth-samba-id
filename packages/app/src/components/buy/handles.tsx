import { Box, Text, VStack } from '@chakra-ui/react';
// import Add from '../Add';

// @ts-ignore
const Handles = ({ children }) => {
  return (
    <Box w="full">
      <Text color="section.200" fontWeight={600} marginBottom={4}>
        Handles
      </Text>
      <Text color="grey.200" fontSize={{ base: "xs", md: "sm" }}>
        Set how many years do you want to be owner of this Handles.
      </Text>
      <VStack spacing={5} mt={3}>
        {children}
      </VStack>
      {/*<Modal*/}
      {/*  domain={domain}*/}
      {/*  setDomain={setDomain}*/}
      {/*  items={items}*/}
      {/*  setItems={setItems}*/}
      {/*  isOpen={isOpen}*/}
      {/*  onClose={onClose}*/}
      {/*/>*/}
      {/*<Add*/}
      {/*  // onClick={() => {*/}
      {/*  //   setDomain("");*/}
      {/*  //   onOpen();*/}
      {/*  // }}*/}
      {/*/>*/}
    </Box>
  )
}

export { Handles }
