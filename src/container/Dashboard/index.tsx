import { useEffect, useState } from "react";
import { getRequestGallery } from "../../api";
import Title from "../../components/Title";
import GridImages from "../../components/GridImages";
import { DataImageType } from "../../type";
import Header from "../../components/Header";
import { SectionType, SortType } from "../../type";

const Dashboard = () => {
  const [selectedOptionSection, setSelectedOptionSection] =
    useState<SectionType>("hot");
  const [selectedOptionSort, setSelectedOptionSort] =
    useState<SortType>("viral");

  const [dataImages, setDataImages] = useState<DataImageType[]>([]);
  useEffect(() => {
    const myCallFunction = async () => {
      try {
        const response = await getRequestGallery(
          selectedOptionSection,
          selectedOptionSort,
          "day",
          1
        );
        setDataImages(response.data);
      } catch (error) {
        setDataImages([]);
      }
    };
    myCallFunction();
  }, [selectedOptionSection, selectedOptionSort]);
  return (
    <>
      <Header
        selectedOptionSection={selectedOptionSection}
        setSelectedOptionSection={setSelectedOptionSection}
        selectedOptionSort={selectedOptionSort}
        setSelectedOptionSort={setSelectedOptionSort}
      />
      <div className="container lg mx-auto">
        <Title />
        <div className="rounded p-2 mt-4">
          <GridImages data={dataImages} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
