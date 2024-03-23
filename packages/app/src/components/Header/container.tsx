import { Center, Image } from '@chakra-ui/react';
// import { Info } from '../user';
import { useNavigate } from '@tanstack/react-router';

export const Container = () => {
  // const { wallet } = useFuelConnect()
  // const { isFetching } = useIsConnected()
  const navigate = useNavigate();

  const account = () => {
    // @TODO: Wallet connect validation
    // if(isFetching && wallet === undefined) {
    //   return <Skeleton height="2.5rem" w="7rem" rounded={8} />
    // }
    // if(wallet) {
    //   return <Info name="user" account={wallet.address} />
    // }
    // if(!isFetching && wallet === null) return <Box><Connect /></Box>
    return <p>account</p>;
  };

  const goHome = () => {
    navigate({ to: '/' }).then();
  };

  return (
    <Center
      as="header"
      w="full"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py={2}
      px={{ base: 0, md: 20, xl: 40 }}
      className="transition-all-05"
    >
      <button onClick={goHome}>
        <Image src="./symbol.svg" width={190} height={75} alt="Bako logo" />
      </button>
      {account()}
    </Center>
  );
};
