import { createRootRouteWithContext } from '@tanstack/react-router';
import { Pages } from '../pages';

interface MyRouterContext {
  isConnected: boolean | null;
}

export const rootRoute = createRootRouteWithContext<MyRouterContext>()({
  component: Pages.Layout,
});
