import axios, { AxiosResponse } from "axios";
import { SectionType, SortType, WindowType, PageType } from "../type";

export const getRequestGallery = async (
  section: SectionType,
  sort: SortType,
  window: WindowType,
  page: PageType
): Promise<AxiosResponse | { data: any; status: number; success: boolean }> => {
  const url = `http://localhost:4000/api/gallery?section=${section}&sort=${sort}&window=${window}&page=${page}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      data: error,
      status: 400,
      success: false,
    };
  }
};
