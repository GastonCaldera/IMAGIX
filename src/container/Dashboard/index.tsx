import { useEffect, useState, ChangeEvent } from "react";
import { getRequestGallery } from "../../api";
import Header from "../../components/Header";
import GridImages from "../../components/GridImages";
import { DataImageType } from "../../type";
import Select from "../../components/Select";
import { optionsSection, optionsSort } from "../../data";

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");



  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };
  const [dataImages, setDataImages] = useState<DataImageType[]>([]);
  useEffect(() => {
    const myCallFunction = async () => {
      try {
        const response = await getRequestGallery("hot", "viral", "day", 1);
        setDataImages(response.data);
      } catch (error) {
        setDataImages([]);
      }
    };
    myCallFunction();
  }, []);
  return (
    <div className="container lg mx-auto">
      <Header />
      <div className="rounded p-2 mt-4">
        <div className="flex justify-between bg-[#4a514e] ">
          <Select
            options={optionsSection}
            value={selectedOption}
            onChange={handleChange}
          />
          <Select
            options={optionsSort}
            value={selectedOption}
            onChange={handleChange}
          />
        </div>
        <GridImages data={dataImages} />
      </div>
    </div>
  );
};

export default Dashboard;
