
export const GenerateUrl = ({
  page,
  pageSize,
  query,
}: {
  page?: number | null;
  pageSize: number | null;
  query?: string | null;
}): string => {
  let url = "";
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
