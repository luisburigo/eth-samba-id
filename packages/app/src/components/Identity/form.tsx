import { useForm, Controller } from 'react-hook-form';
import {
  VStack,
  Input,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Code,
} from '@chakra-ui/react';
import { useReadContract, useWriteContract } from 'wagmi';
import { identityAbi } from '../../config/abi';
import { CONTRACT } from '../../config/addresses/contracts';
import { config } from '../../providers/walletConnector/walletConfig';

interface IdentityForm {
  name: string;
  validAt: number;
  nft: string;
  ipfs: string;
  github: string;
  twitter: string;
  warpcaster: string;
}

export const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IdentityForm>({
    defaultValues: {
      name: '',
      validAt: 0,
      nft: '',
      ipfs: '',
      github: '',
      twitter: '',
      warpcaster: '',
    },
  });

  const { writeContract, isPending } = useWriteContract({
    config,
    mutation: {
      onSuccess: (data) => {
        console.log({ SUCCESS: data });
      },
      onError: (error) => {
        console.log({ ERROR: error });
      },
    },
  });

  const identityData = useReadContract({
    abi: identityAbi,
    address: CONTRACT.IDENTITY,
    functionName: 'getIdentity',
    args: ['Pedro'],
  });

  const onSubmit = (data: IdentityForm) => {
    console.log(data);
    writeContract({
      abi: identityAbi,
      address: CONTRACT.IDENTITY,
      functionName: 'createIdentity',
      args: [
        data.name,
        BigInt(data.validAt),
        data.nft,
        data.ipfs,
        data.github,
        data.twitter,
        data.warpcaster,
      ],
    });
  };

  return (
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
            rules={{ required: 'Name is required' }}
            render={({ field }) => (
              <Input {...field} color="white" placeholder="Name" />
            )}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.validAt}>
          <FormLabel color="white">Valid At</FormLabel>
          <Controller
            name="validAt"
            control={control}
            defaultValue={0}
            rules={{ required: 'Valid At is required' }}
            render={({ field }) => (
              <Input
                {...field}
                color="white"
                placeholder="Valid At"
                type="number"
              />
            )}
          />
          <FormErrorMessage>
            {errors.validAt && errors.validAt.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.validAt}>
          <FormLabel color="white">NFT</FormLabel>
          <Controller
            name="nft"
            control={control}
            defaultValue=""
            rules={{ required: 'NFT is required' }}
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
            defaultValue=""
            rules={{ required: 'IPFS is required' }}
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
            defaultValue=""
            rules={{ required: 'GitHub is required' }}
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
            defaultValue=""
            rules={{ required: 'Twitter is required' }}
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
            rules={{ required: 'Warpcaster is required' }}
            render={({ field }) => (
              <Input {...field} color="white" placeholder="Warpcaster" />
            )}
          />
          <FormErrorMessage>
            {errors.warpcaster && errors.warpcaster.message}
          </FormErrorMessage>
        </FormControl>
        <Button type="submit" isLoading={isPending} loadingText="Loading...">
          Submit
        </Button>
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
  );
};
