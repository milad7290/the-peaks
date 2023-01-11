import { FC } from "react";
import { Link } from "react-router-dom";
import { IStory } from "../../../models/entities/stories/story-entity.interface";
import { StoryOutputType } from "../../../models/enums/story/story-output-type.enum";
import "./index.scss";

interface PartialStoryProps {
  story: IStory;
  storyOutputType?: StoryOutputType;
}

const PartialStory: FC<PartialStoryProps> = ({
  story,
  storyOutputType = StoryOutputType.Main,
  ...rest
}) => {
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

  let containerClass = "main-story-container";
  switch (storyOutputType) {
    case StoryOutputType.MainNoTriadText:
      containerClass = "main-no-triad-text-story-container";
      break;

    case StoryOutputType.HeadLine:
      containerClass = "head-line-story-container";
      break;

    case StoryOutputType.HomeTop:
      containerClass = "home-top-story-container";
      break;

    case StoryOutputType.HomeTopImageLess:
      containerClass = "home-top-image-less-story-container";
      break;

    default:
      break;
  }

  return (
    <Link to={`/article?id=${story.id}`} className="bookmark-link">
      <div
        style={{ borderBottom: `3px solid ${borderBottomColor}` }}
        className={containerClass}
      >
        {story.fields && story.fields.thumbnail ? (
          <img
            alt={story.webTitle}
            className="back-image"
            src={story.fields.thumbnail}
          />
        ) : (
          <div className="no-image">
            <img alt="logo" className="logo" src="/images/Logo_White.png" />
          </div>
        )}
        <div className="story-content">
          <h2>{story.fields.headline}</h2>
          {story.fields.trailText && <p>{story.fields.trailText}</p>}
        </div>
      </div>
    </Link>
  );
};

export default PartialStory;
