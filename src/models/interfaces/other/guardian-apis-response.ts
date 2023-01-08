import { IStory } from "../../entities/stories/story-entity.interface";

export interface IGuardianApisResponse {
  status: string;
  userTier: string;
  total: number;
  startIndex: number;
  pageSize: number;
  currentPage: number;
  pages: number;
  orderBy: string;
  results: IStory[];
}
