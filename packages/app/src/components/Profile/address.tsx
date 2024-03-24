import { AddIcon, CopyIcon } from '@chakra-ui/icons';
import {
  Box,
  Text,
  Button,
  Input,
  InputGroup,
  Icon,
  InputRightElement,
  InputLeftElement,
  useToast,
} from '@chakra-ui/react';
import { FaEthereum } from 'react-icons/fa';

interface Props {
  owner: string;
  resolver: string;
}

export const Address = ({ owner, resolver }: Props) => {
  const toast = useToast();

  const handleCopyText = (address: string) => {
    navigator.clipboard.writeText(address);

    toast({
      title: 'Copied',
      description: `${address} copied`,
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      rounded={8}
      w="full"
      minH="fit-content"
      bgGradient="linear-gradient(0deg, rgba(245, 245, 245, 0.03), rgba(245, 245, 245, 0.03)), linear-gradient(180deg, rgba(243, 242, 241, 0.0075) 0%, rgba(243, 242, 241, 0.015) 28.5%, rgba(243, 242, 241, 0.015) 72%, rgba(243, 242, 241, 0.06) 100%)"
      px={12}
      py={8}
      boxShadow="0px 0px 5px 1px rgba(255, 255, 255, 0.05)"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        pb={4}
      >
        <Text fontSize="x-large" fontWeight={700}>
          Addresses
        </Text>
        {/* <Button rightIcon={<AddIcon />}>Add</Button> */}
      </Box>
      <Box display="flex" flexDirection="column" gap={2}>
        <InputGroup>
          <InputLeftElement>
            <Icon as={FaEthereum} />
          </InputLeftElement>
          <Input
            placeholder="address"
            textAlign="right"
            value={owner}
            disabled
          />
          <InputRightElement>
            <CopyIcon onClick={() => handleCopyText(owner)} cursor="pointer" />
          </InputRightElement>
        </InputGroup>
        <InputGroup>
          <InputLeftElement>
            <Icon as={FaEthereum} />
          </InputLeftElement>
          <Input
            placeholder="address"
            textAlign="right"
            value={resolver}
            disabled
          />
          <InputRightElement>
            <CopyIcon
              onClick={() => handleCopyText(resolver)}
              cursor="pointer"
            />
          </InputRightElement>
        </InputGroup>
      </Box>
    </Box>
  );
};
