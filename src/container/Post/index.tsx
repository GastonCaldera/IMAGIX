import { useEffect, useState } from "react";
import { getPostById } from "../../api";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import { DataImageType } from "../../type";
import FooterImageBox from "../../components/FooterImageBox";

const PostContainer = () => {
  const params = useParams();
  const [dataImage, setDataImage] = useState<DataImageType | {}>({});
  useEffect(() => {
    const myCallFunction = async () => {
      try {
        const response = await getPostById(params.id || "");
        setDataImage(response.data);
      } catch (error) {
        setDataImage({});
      }
    };
    myCallFunction();
  }, [params.id]);

  const dataImageTyped = dataImage as DataImageType;
  return (
    <>
      <Header showSelect={false} showGoBack={true} />
      <div className="container mx-auto mt-8 md:w-[600px] w-[350px]  bg-[#474a51] px-6 pt-6 rounded mb-6">
        {dataImageTyped?.images !== undefined && (
          <div className="flex flex-col justify-center">
            <div className="h-[600px] mx-auto">
              {dataImageTyped?.images?.[0]?.type === "video/mp4" ? (
                <video
                  src={dataImageTyped?.images[0]?.link}
                  controls
                  muted
                  className="h-[600px] w-[350px] mx-auto bg-black"
                />
              ) : (
                <img
                  src={dataImageTyped?.images[0]?.link}
                  alt={dataImageTyped?.images[0]?.id}
                  className="rounded-t  h-[600px] md:w-full w-80"
                />
              )}
            </div>
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h1 className="text-lg md:text-xl font-bold text-white">
                  {dataImageTyped?.title}
                </h1>
                <p className=" text-white">{dataImageTyped?.description}</p>
              </div>
              <FooterImageBox
                ups={dataImageTyped.ups}
                downs={dataImageTyped.downs}
                comment_count={dataImageTyped.comment_count}
                views={dataImageTyped.views}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PostContainer;
