import { ProfileComponents } from '@/components/Profile';
import { VStack, Center } from '@chakra-ui/react';
import { GoBack } from '@/components/helpers/goBack';
import { useAccount, useReadContract } from 'wagmi';
import { identityAbi } from '@/config/abi';
import { CONTRACT } from '@/config/addresses/contracts';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Page() {

  const router = useRouter()
  const { identifier } = router.query


  const identityData = useReadContract({
    abi: identityAbi,
    address: CONTRACT.IDENTITY,
    functionName: 'getIdentity',
    args: [identifier as string],
  });

  const account = useAccount();

  if (identityData.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Center
      w="full"
      h="full"
      display="flex"
      flexDir="column"
      py={2}
      px={{ base: 12 }}
      zIndex={10}
    >
      <GoBack />
      <Center w="full" h="full" pt={14}>
        <VStack w="full" h="full" maxW="42rem" gap={3}>
          <ProfileComponents.Hero name={identityData.data?.name ?? ''} />
          {/* <ProfileComponents.Account {...identityData.data} /> */}
          {/* <ProfileComponents.Address addresses={account?.addresses ?? ''} /> */}
          {/* <ProfileComponents.Ownership /> */}
          {/* <Profile /> */}
        </VStack>
      </Center>
    </Center>
  );
}

// const Profile = () => {
//   const address =
//     'fuel1yuxap2tnlt4nmr64k6ujlhlqpm9rf8ye5uknqkf30wzwugp0q8wq2fps52';

//   return (
//     <ProfileComponents.Data>
//       <Address address={address} />
//       <Ownership owner={address} expiry="2024-03-31" parent="eth" />
//       <Divider w="full" bg="grey.200" />
//       <Button>Action</Button>
//     </ProfileComponents.Data>
//   );
// };

// const Address = ({ address }: { address: string }) => {
//   return (
//     <Box display="flex" flexDir="column" gap={2}>
//       <Text fontSize="sm" fontWeight={600} color="button.200">
//         Address
//       </Text>
//       <ProfileComponents.InfoButton
//         _hover={{ transform: 'translate(0px, -3px)' }}
//       >
//         <Text color="background.600" fontSize="sm" fontWeight={500}>
//           {address}
//         </Text>
//         <CopyIcon />
//       </ProfileComponents.InfoButton>
//     </Box>
//   );
// };

// interface OwerneshipProps {
//   owner: string;
//   expiry: string;
//   parent: string;
// }

// const Ownership = ({ owner, expiry, parent }: OwerneshipProps) => {
//   return (
//     <Box display="flex" flexDir="column" gap={2}>
//       <Text fontSize="sm" fontWeight={600} color="button.200">
//         Ownership
//       </Text>
//       <Box display="flex" gap={2} flexWrap="wrap">
//         <ProfileComponents.InfoButton
//           _hover={{ transform: 'translate(0px, -3px)' }}
//         >
//           <Text fontSize="sm" fontWeight={400} color="grey.200">
//             owner
//           </Text>
//           <Text color="background.600" fontSize="sm" fontWeight={500}>
//             {owner}
//           </Text>
//           <CopyIcon />
//         </ProfileComponents.InfoButton>
//         <ProfileComponents.InfoButton
//           _hover={{ transform: 'translate(0px, -3px)' }}
//         >
//           <Text fontSize="sm" fontWeight={400} color="grey.200">
//             expiry
//           </Text>
//           <Text color="background.600" fontSize="sm" fontWeight={500}>
//             {expiry}
//           </Text>
//           <CopyIcon />
//         </ProfileComponents.InfoButton>
//         <ProfileComponents.InfoButton
//           _hover={{ transform: 'translate(0px, -3px)' }}
//         >
//           <Text fontSize="sm" fontWeight={400} color="grey.200">
//             parent
//           </Text>
//           <Text color="background.600" fontSize="sm" fontWeight={500}>
//             {parent}
//           </Text>
//           <CopyIcon />
//         </ProfileComponents.InfoButton>
//       </Box>
//     </Box>
//   );
// };
