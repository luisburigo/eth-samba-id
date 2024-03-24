import { CopyIcon } from '@chakra-ui/icons';
import { IoLogoGithub } from 'react-icons/io5';
import { FaXTwitter } from 'react-icons/fa6';
import { TbWorld } from 'react-icons/tb';
import {
  Box,
  Text,
  Input,
  InputLeftAddon,
  InputGroup,
  Icon,
  InputRightElement,
  useToast,
} from '@chakra-ui/react';
import { RiNftLine } from 'react-icons/ri';
import { SiIpfs } from 'react-icons/si';

interface Props {
  name: string;
  validAt: bigint;
  owner: `0x${string}`;
  nft: string;
  ipfs: string;
  github: string;
  twitter: string;
  warpcaster: string;
}

export const Account = (account?: Props) => {
  const toast = useToast();

  const handleCopyText = (text: string) => {
    navigator.clipboard.writeText(text);

    toast({
      title: 'Copied',
      description: `${text} copied`,
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  if (!account) {
    return null;
  }

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
          Accounts
        </Text>
        {/* <Button rightIcon={<AddIcon />}>Add</Button> */}
      </Box>
      <Box display="flex" flexDirection="column" gap={2}>
        <InputGroup>
          <InputLeftAddon>
            <Icon as={FaXTwitter} boxSize={8} />
          </InputLeftAddon>
          <Input
            placeholder="Twitter"
            textAlign="right"
            value={account.twitter}
            disabled
          />
          <InputRightElement>
            <CopyIcon
              cursor="pointer"
              onClick={() => handleCopyText(account.twitter)}
            />
          </InputRightElement>
        </InputGroup>
        <InputGroup>
          <InputLeftAddon>
            <Icon as={IoLogoGithub} boxSize={8} />
          </InputLeftAddon>
          <Input
            placeholder="Github"
            textAlign="right"
            value={account.github}
            disabled
          />
          <InputRightElement>
            <CopyIcon
              cursor="pointer"
              onClick={() => handleCopyText(account.github)}
            />
          </InputRightElement>
        </InputGroup>
        <InputGroup>
          <InputLeftAddon>
            <Icon as={RiNftLine} boxSize={8} />
          </InputLeftAddon>
          <Input
            placeholder="NFT"
            textAlign="right"
            value={account.nft}
            disabled
          />
          <InputRightElement>
            <CopyIcon
              cursor="pointer"
              onClick={() => handleCopyText(account.nft)}
            />
          </InputRightElement>
        </InputGroup>
        <InputGroup>
          <InputLeftAddon>
            <Icon as={SiIpfs} boxSize={8} />
          </InputLeftAddon>
          <Input
            placeholder="IPFS"
            textAlign="right"
            value={account.ipfs}
            disabled
          />
          <InputRightElement>
            <CopyIcon
              cursor="pointer"
              onClick={() => handleCopyText(account.ipfs)}
            />
          </InputRightElement>
        </InputGroup>
        <InputGroup>
          <InputLeftAddon>
            <Icon as={TbWorld} boxSize={8} />
          </InputLeftAddon>
          <Input
            placeholder="Warpcaster"
            textAlign="right"
            value={account.warpcaster}
            disabled
          />
          <InputRightElement>
            <CopyIcon
              cursor="pointer"
              onClick={() => handleCopyText(account.warpcaster)}
            />
          </InputRightElement>
        </InputGroup>
      </Box>
    </Box>
  );
};
