
interface Module {
  id: string;
  to?: string;
}

interface RootRoute {
  modules: Module[];
}

export const routes: RootRoute[] = [
  {
    modules: [
      {
        id: 'HOME_MODULE',
        to: '/',
      },
    ]
  }
];

export default routes;
