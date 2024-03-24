import { CopyIcon } from '@chakra-ui/icons';
import {
  Box,
  Text,
  Button,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftAddon,
} from '@chakra-ui/react';
import { GoArrowUpRight } from 'react-icons/go';

export const Ownership = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      rounded={8}
      w="full"
      minH="fit-content"
      bg="gray"
      px={12}
      py={4}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        py={4}
      >
        <Text fontSize="x-large" fontWeight={700}>
          Ownership
        </Text>
        {/* <Button rightIcon={<Icon as={PiCaretDoubleRightFill} />}>Extend</Button> */}
      </Box>
      <Box display="flex" flexDirection="column" gap={2}>
        <InputGroup>
          <InputLeftAddon>
            <Text>Owner</Text>
          </InputLeftAddon>
          <Input placeholder="owner" textAlign="right" />
          <InputRightElement>
            <Icon as={GoArrowUpRight} />
          </InputRightElement>
        </InputGroup>
        <InputGroup>
          <InputLeftAddon>
            <Text>Manager</Text>
          </InputLeftAddon>
          <Input placeholder="manager" textAlign="right" />
          <InputRightElement>
            <Icon as={GoArrowUpRight} />
          </InputRightElement>
        </InputGroup>
        <InputGroup>
          <InputLeftAddon>
            <Text>Parent</Text>
          </InputLeftAddon>
          <Input placeholder="parent" textAlign="right" />
          <InputRightElement>
            <CopyIcon />
          </InputRightElement>
        </InputGroup>
        <InputGroup>
          <InputLeftAddon>
            <Text>Expiry</Text>
          </InputLeftAddon>
          <Input placeholder="expiry" textAlign="right" />
          <InputRightElement>
            <CopyIcon />
          </InputRightElement>
        </InputGroup>
      </Box>
    </Box>
  );
};
