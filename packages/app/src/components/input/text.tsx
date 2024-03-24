import { Box, Input as ChakraInput, InputGroup, InputProps } from '@chakra-ui/react';

interface CustomInputProps extends InputProps {
  value?: string;
}

const TextInput = ({ value }: CustomInputProps) => {
  return (
    <Box maxW="full" w="fit-content" display="flex" alignItems="center">
      <InputGroup>
        <ChakraInput
          defaultValue={value ?? ""}
          type="text"
          readOnly={true}
          border="1px solid #2B2927"
          borderRadius={10}
          backgroundColor="#151413"
          color="white"
          fontSize={16}
          fontWeight={600}
          py={6}
        />
      </InputGroup>
    </Box>
  );
};

export { TextInput }
