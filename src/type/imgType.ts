export type DataImageType = {
  id: string;
  title: string;
  downs: number;
  ups: number;
  comment_count: number;
  images: ImagesType[];
  score: number;
  views: number;
  type: string;
};

export type ImagesType = {
  id: string;
  link: string;
  type: string;
};
