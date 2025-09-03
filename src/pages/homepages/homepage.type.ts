import type { IconType } from "react-icons";

export interface IBannerItem {
  id: number;
  store: string;
  storeIcon: IconType | string;
  title: string;
  sale: string;
  img: string;
  gradient: string;
}

export interface ICategoryItem {
  id: number;
  title: string;
  icon: IconType | string;
}

export interface IIntroduceSectionItem {
  icon: IconType;
  title: string;
  description: string;
}

export interface IMoreAboutUs {
  title: string;
  descriptions: string[];
  buttonLabel: string;
  imageUrl: string;
}

export interface IServiceOverviewItem {
  title: string;
  description: string;
  icon: IconType;
  backgroundImage: string;
  path: string;
}

export interface IWorkflowStep {
  imageUrl: string;
  title: string;
  description: string;
}

export interface IFeedbackItem {
  userImage: string;
  content: string;
  userName: string;
  note: string;
}
