import { ChangeEvent } from "react";
import { SectionType, SortType } from "./getRequestGalleryType";

export type Option = {
  value: SortType | SectionType;
  label: string;
};

export type SelectProps = {
  options: Option[];
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};
