import { RouterProvider } from '@tanstack/react-router';
import { router } from './routes';

function App() {
  // @TODO: Here should use the hook that connects with the wallet
  const isConnected = false;

  return <RouterProvider router={router} context={{ isConnected }} />;
}

export default App;
