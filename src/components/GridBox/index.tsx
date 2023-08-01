import "aos/dist/aos.css";
import { GridBoxProps } from "../../type";
import {
  ChevronUpIcon,
  EyeIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/solid";

export default function GridBox({ index, data }: GridBoxProps) {
  return (
    <div
      className={`cursor-pointer hover:brightness-110 w-full bg-[#474a51] drop-shadow-lg rounded-b break-inside-avoid-column ${
        index === 0 ? "" : "mt-8"
      }`}
      onClick={() => {}}
    >
      {data.images?.[0].type === "video/mp4" ? (
        <video src={data.images?.[0]?.link} controls />
      ) : (
        <img
          src={data.images?.[0]?.link}
          alt={data.images?.[0]?.id}
          className="rounded-t w-full"
        />
      )}

      <div className="rounded-b p-4">
        <h1 className="text-base text-left text-white font-semibold">
          {data.title} {index}
        </h1>
        <div className="flex flex-row justify-between mt-4">
          <div className="flex flex-row">
            <ChevronUpIcon className="w-6 h-6 text-white" />
            <h1 className="ml-2 text-base font-semibold text-white">
              {data.ups}
            </h1>
          </div>
          <div className="flex flex-row">
            <ChatBubbleLeftIcon className="w-6 h-6 text-white" />
            <h1 className="ml-2 text-base font-semibold text-white">
              {data.comment_count}
            </h1>
          </div>
          <div className="flex flex-row">
            <EyeIcon className="w-6 h-6 text-white" />
            <h1 className="ml-2 text-base font-semibold text-white">
              {data.views}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
