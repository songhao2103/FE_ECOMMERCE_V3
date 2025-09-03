import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes/router.config";
import DefaultLayout from "./layouts/DefaultLayout";
import { Fragment } from "react/jsx-runtime";
import { ROUTE_PATH } from "./routes/routePath";
import NotFound from "./components/errors/NotFound";
import { Suspense } from "react";
import LoadingScreen from "./components/loader/LoadingScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            const Layout =
              route.layout === null ? Fragment : route.layout || DefaultLayout;

            return (
              <Route
                path={route.path}
                key={index}
                element={
                  <Suspense fallback={<LoadingScreen />}>
                    <Layout>
                      <Page />
                    </Layout>
                  </Suspense>
                }
              />
            );
          })}
          <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
