import { createRouter } from '@tanstack/react-router';
import { rootRoute } from './__root.ts';
import { homeRoute } from './childrens.ts';

const routeTree = rootRoute.addChildren([homeRoute]);

export const router = createRouter({
  routeTree,
  context: {
    isConnected: null,
  },
});
