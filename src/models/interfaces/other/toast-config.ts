import { IStory } from "../../entities/stories/story-entity.interface";
import { ToastType } from "../../enums/story/toast-type.enum";

export interface IToastConfig {
  id?: number| null;
  content: string;
  type: ToastType;
  icon: string;
}
