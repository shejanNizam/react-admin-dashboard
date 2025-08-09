type RouteItem = {
  path?: string;
  element?: React.ReactNode;
  children?: RouteItem[];
};

export const routesGenerators = (items: RouteItem[]) => {
  if (!Array.isArray(items)) {
    console.error("Invalid input: routesGenerators expects an array of items.");
    return [];
  }

  const generateRoutes = (items: RouteItem[]) =>
    items.reduce<{ path: string; element: React.ReactNode }[]>((acc, item) => {
      if (item.path && item.element) {
        acc.push({ path: item.path, element: item.element });
      }
      if (Array.isArray(item.children)) {
        acc.push(...generateRoutes(item.children));
      }
      return acc;
    }, []);

  return generateRoutes(items);
};
