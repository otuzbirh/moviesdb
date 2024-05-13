import { routes } from './../data/routes/index';

interface Module {
  id: string;
  to?: string;
  submodules?: Module[];
}

export const separateRoutes = (keys: string[]) => {
  const separatedRoutes: Module[] = [];

  routes.forEach(rootRoute => {
    rootRoute.modules.forEach((moduleRoute: Module) => {
      if (!moduleRoute.to) {
        if (keys.includes(moduleRoute.id)) {
          separatedRoutes.push(moduleRoute);
        }
      } else if (moduleRoute.submodules) {
        moduleRoute.submodules.forEach((submoduleRoute: Module) => {
          if (keys.includes(submoduleRoute.id)) {
            separatedRoutes.push(submoduleRoute);
          }
        });
      }
    });
  });

  return separatedRoutes;
};
