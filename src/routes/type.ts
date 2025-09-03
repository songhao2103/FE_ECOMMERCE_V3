import type { ComponentType, JSX, ReactNode } from "react";

export interface RouteConfig {
  path: string;
  component: ComponentType;
  layout?: (props: { children: ReactNode }) => JSX.Element;
}
