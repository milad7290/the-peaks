export interface IStoryFilter {
  useSearch: boolean;
  page?: number | null;
  pageSize?: number | null;
  query?: string | null;
  section?: string | null;
  orderBy?: string | null;
  showFields?: string | null;
}
