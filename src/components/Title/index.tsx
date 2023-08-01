import "aos/dist/aos.css";
import { useEffect } from "react";
const AOS = require("aos");

export default function Title() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mt-14">
      <h1
        className={`text-6xl font-roboto text-white text-center`}
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos="fade-down"
      >
        IMAGIX
      </h1>
      <h1
        className={`text-4xl font-roboto text-slate-500 text-center`}
        style={{ textAlign: "center" }}
        data-aos-delay="1200"
        data-aos-duration="1000"
        data-aos="fade-right"
      >
        Explore the World of Images with Imgur
      </h1>
    </div>
  );
}
