import React, { Fragment, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import NotFoundView from "./views/Errors/NotFoundView";
import HomeView from "./views/Home/HomeView";

type RoutesType = {
  exact?: boolean;
  path?: string;
  layout?: any;
  component?: any;
  routes?: RoutesType;
}[];

export const renderRoutes = (routes: RoutesType = []): JSX.Element => (
  <Suspense fallback={<></>}>
    <Routes>
      {routes.map((route, i) => {
        const Layout = route.layout || Fragment;
        const Component = route.component;
        return (
            <Route
              key={i}
              path={route.path}
              element={
                <>
                  <Fragment>
                    <Layout>
                      {route.routes ? (
                        renderRoutes(route.routes)
                      ) : (
                        <Component />
                      )}
                    </Layout>
                  </Fragment>
                </>
              }
            />
        );
      })}
    </Routes>
  </Suspense>
);

const routes: RoutesType = [
  {
    exact: true,
    path: "/404",
    component: NotFoundView,
  },

  {
    path: "*",
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: "/",
        component: HomeView,
      },

      {
        path: "*",
        component: () => <Navigate to="/404" />,
      },
    ],
  },
];

export default routes;
