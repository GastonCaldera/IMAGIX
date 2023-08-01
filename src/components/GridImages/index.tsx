import "aos/dist/aos.css";
import { useEffect } from "react";
import { GridImagesProps, DataImageType } from "../../type";
import GridBox from "../GridBox";
const AOS = require("aos");

export default function GridImages({ data }: GridImagesProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="my-8 sm:columns-1 md:columns-3 lg:columns-4 mb-8 "
      data-aos="fade-up"
      data-aos-delay="1200"
    >
      {data?.map((item: DataImageType, index: number) => {
        if (item?.images?.length === undefined) {
          return null;
        }
        return <GridBox key={index} data={item} index={index} />;
      })}
    </div>
  );
}
