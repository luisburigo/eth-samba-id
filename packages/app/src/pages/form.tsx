import { Identity } from '@/components/Identity';
import { Center } from '@chakra-ui/react';

export default function Page() {
  return (
    <Center w="full" h="full" alignItems="start" zIndex={10}>
      <Identity.Form />
    </Center>
  );
}
