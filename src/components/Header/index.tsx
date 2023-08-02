import { ChangeEvent } from "react";
import Select from "../../components/Select";
import { optionsSection, optionsSort } from "../../data";
import { HeaderProps, SectionType, SortType } from "../../type";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const Header = ({
  selectedOptionSection = "hot",
  setSelectedOptionSection = () => {},
  selectedOptionSort = "viral",
  setSelectedOptionSort = () => {},
  showSelect,
  showGoBack,
}: HeaderProps) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/`);
  };
  const handleChangeSection = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptionSection(e.target.value as SectionType);
  };
  const handleChangeSort = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptionSort(e.target.value as SortType);
  };
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex bg-[#4a514e] sticky top-0 z-50 justify-between">
      <div
        className="flex justify-center items-center p-2 sm:px-0 cursor-pointer"
        onClick={handleOnClick}
      >
        <h1
          className={`text-2xl sm:text-xl font-roboto text-white border-r-2 px-4 sm:px-2`}
        >
          IX
        </h1>
      </div>
      {showSelect && (
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
      )}
      {showGoBack && (
        <div className="my-auto mr-4 cursor-pointer" onClick={handleGoBack}>
          <ArrowLeftIcon className="h-6 w-6 text-white" />
        </div>
      )}
    </div>
  );
};

export default Header;
