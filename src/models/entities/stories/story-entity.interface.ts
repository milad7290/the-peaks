import { IBaseEntity } from "../base-entity.interface";

export interface IStory extends IBaseEntity {
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
  fields: {
    headline: string;
    trailText: string| null | undefined;
    body: string;
    thumbnail?: string | null | undefined;
  };
}
