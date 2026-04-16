import { ReactNode } from "react";

export enum PageType {
  TYPE_PAGE = "TYPE_PAGE",
  TEXT_PAGE = "TEXT_PAGE",
  INFO_PAGE = "INFO_PAGE",
}

export const PERSON_TYPE_DATE = "4 САР 25, 2026";
export const PERSON_TYPE_TIME = "19:00 PM";
export const PERSON_TYPE_COLOR = "blue-500";
export const PERSON_TYPE_TEXT_COLOR = "orange-500";

export type ChildrenProps = {
  children: ReactNode;
};

export interface FirestoreDocument {
  name: string;
  type: string;
  date: Date;
}
