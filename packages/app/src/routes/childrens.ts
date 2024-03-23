import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { Pages } from '../pages';

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  component: Pages.Home,
  path: '/',
})