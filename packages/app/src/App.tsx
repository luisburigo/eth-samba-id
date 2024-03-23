import { useWeb3Modal } from '@web3modal/wagmi/react';

function App() {
  const { open } = useWeb3Modal();

  return (
    <main>
      <p>Wallet Connector</p>
      <button onClick={() => open()}>Open Connect Modal</button>
      <button onClick={() => open({ view: 'Networks' })}>
        Open Network Modal
      </button>
    </main>
  );
}

export default App;
