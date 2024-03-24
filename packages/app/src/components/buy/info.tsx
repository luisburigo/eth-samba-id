import { Box, Divider, VStack } from '@chakra-ui/react';
import { Input } from '@/components/input';
import { Coin } from '@/types';

const { ETH } = Coin;

interface InfoProps {
  name: string,
  index: number,
  periodHandle: (index: number, newValue: number) => void;
}

const Info = ({ name, index, periodHandle }: InfoProps) => {
  return (
    <VStack w="full" key={name} spacing={5}>
      {index > 0 && <Divider w="80%" borderColor="link.500" />}
      <VStack w="full" flexDirection="row" spacing={4}>
        <Box maxW="50%">
          <Input.Text value={`@${name}`} />
        </Box>
        {/*<Flex*/}
        {/*  w="full"*/}
        {/*  maxW="50%"*/}
        {/*  padding=".5rem .75rem"*/}
        {/*  marginTop=".5rem"*/}
        {/*  border="#2B2927"*/}
        {/*  borderRadius={10}*/}
        {/*  backgroundColor="#151413"*/}
        {/*  justifyContent="space-around"*/}
        {/*  alignItems="center"*/}
        {/*>*/}
        {/*  */}
        {/*</Flex>*/}
        <Input.Numeric
          index={index}
          onChange={periodHandle}
          key={0}
        />
      </VStack>
    </VStack>
  )
}

export { Info }
