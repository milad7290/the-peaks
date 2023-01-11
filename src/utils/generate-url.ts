export const GenerateUrl = ({
  useSearch = false,
  page,
  pageSize,
  query,
}: {
  useSearch: boolean;
  page?: number | null;
  pageSize: number | null;
  query?: string | null;
}): string => {
  let url = useSearch ? "search?" : "";
  if (page) {
    url = url + `page=${page}&`;
  }
  if (pageSize) {
    url = url + `page-size=${pageSize}&`;
  }
  if (query) {
    url = url + `q=${query}&`;
  }
  return url;
};
