import { ReactNode } from "react";

export enum ContentType {
  None,
  Image,
  Model,
}

export type PageType = {
  day: number;
  color: string;
  english: string;
  maori: string;
  src: string;
  author: string;
  contentType: ContentType;
  content?: ReactNode;
  footer?: ReactNode;
};
