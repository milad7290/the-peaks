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
    thumbnail: string;
  };
}
