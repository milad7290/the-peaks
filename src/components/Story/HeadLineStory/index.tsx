import { FC } from "react";
import { IStory } from "../../../models/entities/stories/story-entity.interface";
import "./index.scss";

interface HeadLineStoryProps {
  story: IStory;
}

const HeadLineStory: FC<HeadLineStoryProps> = ({ story, ...rest }) => {
  let borderBottomColor = "red";
  switch (story.pillarName) {
    case "Sport":
      borderBottomColor = "green";
      break;

    case "Arts":
      borderBottomColor = "yellow";
      break;

    case "Opinion":
      borderBottomColor = "blue";
      break;

    default:
      break;
  }
  return (
    <div
      style={{ borderBottom: `3px solid ${borderBottomColor}` }}
      className="head-line-story-container"
    >
      {story.fields && story.fields.thumbnail && (
        <img
          alt={story.webTitle}
          className="back-image"
          src={story.fields.thumbnail}
        />
       
      )}
       <div className="story-content"></div>
    </div>
  );
};

export default HeadLineStory;
