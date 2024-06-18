import { useEffect, useState, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "components/Layout";
import { Preloader } from "components/Preloader";

import { basicPaths } from "./path";

export const Navigation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [paths, setPaths] = useState<Routes[]>([]);

  useEffect(() => {
    setPaths(basicPaths);
    setIsLoading(false);
  }, []);

  return (
    <Suspense fallback={<Preloader active={true} />}>
      {!isLoading && paths.length > 0 && (
        <Routes>
          <Route element={<Layout />}>
            {paths.map(({ id, path, element, children }) => (
              <Route key={id} path={path} element={element}>
                {children?.map((child) => <Route key={child.id} path={child.path} element={child.element} />)}
              </Route>
            ))}
          </Route>
        </Routes>
      )}
    </Suspense>
  );
};
