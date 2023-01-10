import { FC } from "react";
import { IStory } from "../../../models/entities/stories/story-entity.interface";
import "./index.scss";

interface HeadLineStoryProps {
  story: IStory;
}

const HeadLineStory: FC<HeadLineStoryProps> = ({ story, ...rest }) => {
  let borderBottomColor = "green";
  switch (story.pillarName) {
    case "Sport":
      borderBottomColor = "#F50057";
      break;

    case "Culture":
      borderBottomColor = "#FFCA28";
      break;

    case "Lifestyle":
      borderBottomColor = "#2196F3";
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
       <div className="story-content">
        <h2>{story.fields.headline}</h2>
        <p>{story.fields.trailText}</p>
       </div>
    </div>
  );
};

export default HeadLineStory;
