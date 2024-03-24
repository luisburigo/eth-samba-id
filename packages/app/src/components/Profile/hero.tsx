import { EditIcon, LinkIcon } from '@chakra-ui/icons';
import { Box, Button, Text, Icon } from '@chakra-ui/react';
import { CiUser } from 'react-icons/ci';

interface Props {
  name: string;
}

export const Hero = ({ name }: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      rounded={8}
      w="full"
      minH="fit-content"
      overflow="hidden"
      bgGradient="linear-gradient(0deg, rgba(245, 245, 245, 0.03), rgba(245, 245, 245, 0.03)), linear-gradient(180deg, rgba(243, 242, 241, 0.0075) 0%, rgba(243, 242, 241, 0.015) 28.5%, rgba(243, 242, 241, 0.015) 72%, rgba(243, 242, 241, 0.06) 100%)"
      py={8}
      boxShadow="0px 0px 5px 1px rgba(255, 255, 255, 0.05)"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        pt={{ base: 4 }}
        alignItems="center"
      >
        <Box
          left={7}
          rounded="15%"
          border="2px solid white"
          bg="background.600"
          w="150px"
          h="150px"
          className="transition-all-05"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Icon as={CiUser} boxSize={36} color="white" />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          minH="fit-content"
          alignItems="center"
          p={4}
          pt={{ base: '4rem', sm: 4 }}
          className="transition-all-05"
        >
          <Text fontSize="xl" color="white" fontWeight={600}>
            {name}
          </Text>
        </Box>
      </Box>
      {/* <Box>
        <Box p={4}>
          <Text color="white">
            Robust security. Uncompromising performance. Built like no other,
            Bako Safe is the next evolution in Multisig wallets. Stateless.
            Future-proof. Our stateless design allows for the creation of
            unlimited vaults at no cost (without sponsorships), and the very low
            transaction fees of Fuel Network.
          </Text>
        </Box>
      </Box> */}
      {/* <Box display="flex" gap={8} p={4}>
        <Button variant="link" rightIcon={<EditIcon />}>
          Edit Profile
        </Button>
        <Button variant="link" rightIcon={<LinkIcon />}>
          Etherscan
        </Button>
      </Box> */}
    </Box>
  );
};
