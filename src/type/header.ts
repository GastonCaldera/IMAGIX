import { SectionType, SortType } from "./getRequestGalleryType";
export type HeaderProps = {
  selectedOptionSection?: SectionType;
  setSelectedOptionSection?: (value: SectionType) => void;
  selectedOptionSort?: SortType;
  setSelectedOptionSort?: (value: SortType) => void;
  showSelect: boolean;
  showGoBack: boolean;
};
