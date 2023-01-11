import { IStoryFilter } from "../models/interfaces/story/story-filter.interface";

export const GenerateUrl = ({
  useSearch = false,
  page,
  pageSize,
  query,
  section,
  orderBy = "newest",
  showFields,
}: IStoryFilter): string => {
  let url = useSearch ? "search?" :  "?" ;
  if (page) {
    url = url + `page=${page}&`;
  }
  if (pageSize) {
    url = url + `page-size=${pageSize}&`;
  }
  if (query) {
    url = url + `q=${query}&`;
  }
  if (section) {
    url = url + `section=${section}&`;
  }
  if (orderBy) {
    url = url + `order-by=${orderBy}&`;
  }
  if (showFields) {
    url = url + `show-fields=${showFields}&`;
  }
  return url;
};
