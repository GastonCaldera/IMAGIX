import { ChangeEvent } from "react";
import Select from "../../components/Select";
import { optionsSection, optionsSort } from "../../data";
import { HeaderProps, SectionType, SortType } from "../../type";

const Header = ({
  selectedOptionSection,
  setSelectedOptionSection,
  selectedOptionSort,
  setSelectedOptionSort,
}: HeaderProps) => {
  const handleChangeSection = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptionSection(e.target.value as SectionType);
  };
  const handleChangeSort = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptionSort(e.target.value as SortType);
  };
  return (
    <div className="flex bg-[#4a514e] sticky top-0 z-50">
      <div className="flex justify-center items-center p-2 sm:px-0">
        <h1 className={`text-2xl sm:text-xl font-roboto text-white border-r-2 px-4 sm:px-2`}>
          IX
        </h1>
      </div>
      <div className="flex justify-between bg-[#4a514e] px-2 w-full">
        <Select
          options={optionsSection}
          value={selectedOptionSection}
          onChange={handleChangeSection}
        />
        <Select
          options={optionsSort}
          value={selectedOptionSort}
          onChange={handleChangeSort}
        />
      </div>
    </div>
  );
};

export default Header;
