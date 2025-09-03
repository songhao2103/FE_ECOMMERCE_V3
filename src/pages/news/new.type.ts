import type { ReactNode } from "react";

export interface IBlogItem {
  id: number;
  mainImage: string;
  createAt: string;
  title: string;
  subTitle: string;
  component: () => ReactNode;
}
