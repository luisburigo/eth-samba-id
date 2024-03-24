import { Controller, useForm } from 'react-hook-form';
import {
  Button,
  Code,
  FormControl,
  FormErrorMessage,
  FormLabel, Icon,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  useDisclosure,
  VStack
} from '@chakra-ui/react';
import { useReadContract, useWriteContract } from 'wagmi';
import { identityAbi } from '../../config/abi';
import { CONTRACT } from '../../config/addresses/contracts';
import { config } from '../../providers/walletConnector/walletConfig';
import { FileUpload } from '@/components/input/file';
import { FiFile } from 'react-icons/fi';
import { useIpfsUploader } from '@/hooks/useIpfsUploader';
import { useRouter } from 'next/router';


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
   const router = useRouter();
  const { handlers } = useIpfsUploader();

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<IdentityForm>({
    defaultValues: {
      name: '',
      validAt: 0,
      nft: '',
      ipfs: '',
      github: '',
      twitter: '',
      warpcaster: ''
    }
  });

  const { writeContract, isPending } = useWriteContract({
    config,
    mutation: {
      onSuccess: (data) => {
        router.push(`/profile/${getValues('name')}`)
      },
      onError: (error) => {
        console.log({ ERROR: error });
      }
    }
  });

  const onSubmit = async (data: IdentityForm) => {
    const fileUploadResult = await handlers.handleFileUpload(data.name);
    writeContract({
      abi: identityAbi,
      address: CONTRACT.IDENTITY,
      functionName: 'createIdentity',
      args: [
        // @ts-ignore
        data.name,
        // @ts-ignore
        BigInt(data.validAt),
        data.nft,
        fileUploadResult.data.ipfs,
        data.github,
        data.twitter,
        data.warpcaster
      ]
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
          <Input accept="text/html" onChange={handlers.onInputFileUpload} type="file" color="white" placeholder="IPFS" />
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
        <Button onClick={() => {
          router.push('/')
        }} isLoading={isPending} loadingText="Loading...">
          Cancel
        </Button>
      </VStack>
    </form>
  );
};
