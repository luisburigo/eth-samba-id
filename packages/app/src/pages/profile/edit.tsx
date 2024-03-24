import { ProfileComponents } from '@/components/Profile';
import { GoBack } from '@/components/helpers/goBack';
import { identityAbi } from '@/config/abi';
import { CONTRACT } from '@/config/addresses/contracts';
import { config } from '@/providers/walletConnector/walletConfig';
import {
  Center,
  VStack,
  Input,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Code,
  Box,
  useToast,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useReadContract, useWriteContract } from 'wagmi';

interface IdentityForm {
  name: string;
  nft: string;
  ipfs: string;
  github: string;
  twitter: string;
  warpcaster: string;
}

export default function Page() {
  const router = useRouter();
  const toast = useToast();

  const { identifier } = router.query;

  const identityData = useReadContract({
    abi: identityAbi,
    address: CONTRACT.IDENTITY,
    functionName: 'getIdentity',
    args: [identifier as string],
  });

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IdentityForm>({
    defaultValues: {
      name: identityData.data?.name ?? '',
      nft: identityData.data?.nft ?? '',
      ipfs: identityData.data?.ipfs ?? '',
      github: identityData.data?.github ?? '',
      twitter: identityData.data?.twitter ?? '',
      warpcaster: identityData.data?.warpcaster ?? '',
    },
  });

  useEffect(() => {
    if (identityData.data) {
      const { name, nft, ipfs, github, twitter, warpcaster } =
        identityData.data;

      setValue('name', name);
      setValue('nft', nft);
      setValue('ipfs', ipfs);
      setValue('github', github);
      setValue('twitter', twitter);
      setValue('warpcaster', warpcaster);
    }
  }, [identityData.data, setValue]);

  const { writeContract, isPending } = useWriteContract({
    config,
    mutation: {
      onSuccess: () => {
        toast({
          title: 'Success',
          description: 'Data updated',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
      },
      onError: (error) => {
        toast({
          title: 'Error',
          description: error.message,
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      },
    },
  });

  const onSubmit = (data: IdentityForm) => {
    writeContract({
      abi: identityAbi,
      address: CONTRACT.IDENTITY,
      functionName: 'setData',
      args: [
        data.name,
        data.nft,
        data.ipfs,
        data.github,
        data.twitter,
        data.warpcaster,
      ],
    });
  };

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
          <ProfileComponents.Hero name={identityData?.data?.name ?? ''} />
          <Text fontSize="x-large" fontWeight={700}>
            Edit Profile
          </Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={4} align="stretch">
              <FormControl isInvalid={!!errors.name}>
                <FormLabel id="name" color="white">
                  Name
                </FormLabel>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  // rules={{ required: 'Name is required' }}
                  render={({ field }) => (
                    <Input {...field} color="white" placeholder="Name" />
                  )}
                />
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.nft}>
                <FormLabel color="white">NFT</FormLabel>
                <Controller
                  name="nft"
                  control={control}
                  // rules={{ required: 'NFT is required' }}
                  render={({ field }) => (
                    <Input {...field} color="white" placeholder="NFT" />
                  )}
                />
                <FormErrorMessage>
                  {errors.nft && errors.nft.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.ipfs}>
                <FormLabel color="white">IPFS</FormLabel>
                <Controller
                  name="ipfs"
                  control={control}
                  // rules={{ required: 'IPFS is required' }}
                  render={({ field }) => (
                    <Input {...field} color="white" placeholder="IPFS" />
                  )}
                />
                <FormErrorMessage>
                  {errors.ipfs && errors.ipfs.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.github}>
                <FormLabel color="white">GitHub</FormLabel>
                <Controller
                  name="github"
                  control={control}
                  // rules={{ required: 'GitHub is required' }}
                  render={({ field }) => (
                    <Input {...field} color="white" placeholder="GitHub" />
                  )}
                />
                <FormErrorMessage>
                  {errors.github && errors.github.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.twitter}>
                <FormLabel color="white">Twitter</FormLabel>
                <Controller
                  name="twitter"
                  control={control}
                  // rules={{ required: 'Twitter is required' }}
                  render={({ field }) => (
                    <Input {...field} color="white" placeholder="Twitter" />
                  )}
                />
                <FormErrorMessage>
                  {errors.twitter && errors.twitter.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.warpcaster}>
                <FormLabel color="white">Warpcaster</FormLabel>
                <Controller
                  name="warpcaster"
                  control={control}
                  defaultValue=""
                  // rules={{ required: 'Warpcaster is required' }}
                  render={({ field }) => (
                    <Input {...field} color="white" placeholder="Warpcaster" />
                  )}
                />
                <FormErrorMessage>
                  {errors.warpcaster && errors.warpcaster.message}
                </FormErrorMessage>
              </FormControl>
              <Box display="flex" justifyContent="center" gap={10}>
                <Button
                  isLoading={isPending}
                  loadingText="Loading..."
                  variant="outline"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  isLoading={isPending}
                  loadingText="Loading..."
                >
                  Update Profile
                </Button>
              </Box>
              <Code display="block" whiteSpace="pre" overflowX="auto">
                {JSON.stringify(
                  {
                    ...identityData.data,
                    validAt: identityData.data?.validAt.toString(),
                  },
                  null,
                  2
                )}
              </Code>
            </VStack>
          </form>
        </VStack>
      </Center>
    </Center>
  );
}
