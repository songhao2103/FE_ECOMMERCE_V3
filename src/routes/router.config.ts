import type { RouteConfig } from "./type";
import MainLayout from "../layouts/MainLayout";
import { PREFIX_ROUTE_PATH, ROUTE_PATH } from "./routePath";
import { lazy } from "react";

export const publicRoutes: RouteConfig[] = [
  {
    path: ROUTE_PATH.HOME,
    component: lazy(() => import("../pages/homepages")),
    layout: MainLayout,
  },
  {
    path: ROUTE_PATH.INTRODUCE,
    component: lazy(() => import("../pages/introduce")),
    layout: MainLayout,
  },
  {
    path: ROUTE_PATH.CONTACT,
    component: lazy(() => import("../pages/contact")),
    layout: MainLayout,
  },
  {
    path: ROUTE_PATH.NEWS,
    component: lazy(() => import("../pages/news")),
    layout: MainLayout,
  },
  {
    path: ROUTE_PATH.PRICE_LIST,
    component: lazy(() => import("../pages/price-list")),
    layout: MainLayout,
  },
  {
    path: ROUTE_PATH.PRODUCTS,
    component: lazy(() => import("../pages/products")),
    layout: MainLayout,
  },
  {
    path: PREFIX_ROUTE_PATH.SERVICES + "/:slug",
    component: lazy(() => import("../pages/services")),
    layout: MainLayout,
  },
  {
    path: ROUTE_PATH.NEW_DETAIL,
    component: lazy(() => import("../pages/news/NewDetail")),
    layout: MainLayout,
  },
];
