import "aos/dist/aos.css";
import { GridBoxProps } from "../../type";
import { useNavigate } from "react-router-dom";
import FooterImageBox from "../FooterImageBox";

export default function GridBox({ index, data }: GridBoxProps) {
  const navigate = useNavigate();
  const handleOnClick = (id: string) => {
    navigate(`/post/${id}`);
  };
  return (
    <div
      className={`cursor-pointer hover:brightness-110 w-full bg-[#474a51] drop-shadow-lg rounded-b break-inside-avoid-column ${
        index === 0 ? "" : "mt-8"
      }`}
      onClick={() => {
        handleOnClick(data.id);
      }}
    >
      {data.images?.[0].type === "video/mp4" ? (
        <video src={data.images?.[0]?.link} controls muted />
      ) : (
        <img
          src={data.images?.[0]?.link}
          alt={data.images?.[0]?.id}
          className="rounded-t w-full"
        />
      )}

      <div className="rounded-b p-4">
        <h1 className="text-base text-left text-white font-semibold break-all">
          {data.title}
        </h1>
        <FooterImageBox
          ups={data.ups}
          comment_count={data.comment_count}
          views={data.views}
        />
      </div>
    </div>
  );
}
