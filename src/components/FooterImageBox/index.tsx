import "aos/dist/aos.css";
import { footerImageBoxProps } from "../../type";
import {
  ArrowSmallUpIcon,
  ArrowSmallDownIcon,
  EyeIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/solid";

export default function FooterImageBox({
  ups,
  downs,
  comment_count,
  views,
}: footerImageBoxProps) {
  return (
    <div className="flex flex-row justify-between mt-4">
      <div className="flex flex-row">
        <ArrowSmallUpIcon className="w-6 h-6 text-white" />
        <h1 className="ml-2 text-base font-semibold text-white">{ups}</h1>
      </div>
      {downs && (
        <div className="flex flex-row">
          <ArrowSmallDownIcon className="w-6 h-6 text-white" />
          <h1 className="ml-2 text-base font-semibold text-white">{downs}</h1>
        </div>
      )}
      <div className="flex flex-row">
        <ChatBubbleLeftIcon className="w-6 h-6 text-white" />
        <h1 className="ml-2 text-base font-semibold text-white">
          {comment_count}
        </h1>
      </div>
      <div className="flex flex-row">
        <EyeIcon className="w-6 h-6 text-white" />
        <h1 className="ml-2 text-base font-semibold text-white">{views}</h1>
      </div>
    </div>
  );
}
