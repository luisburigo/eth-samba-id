import { Button } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

export const GoBack = () => {
  const route = useRouter();

  const handleGoBack = () => {
    route.push('/')
  };

  return (
    <Button
      onClick={handleGoBack}
      variant="ghost"
      display="flex"
      alignSelf="start"
      gap={3}
      px={0}
      fontSize="xs"
      _hover={{}}
      color="white"
    >
      <ChevronLeftIcon/>
      Back
    </Button>
  );
};
