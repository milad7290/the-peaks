import { IBaseEntity } from '../base-entity.interface';

export interface IStory extends IBaseEntity {
  title: string;
  description: string;
  createDate: Date;
}
