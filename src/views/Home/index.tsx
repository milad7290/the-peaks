import React, { FC, useCallback, useEffect } from "react";
import Page from "../../components/Page";
import { fetchStories } from "../../services/stories/stories.service";
import { useDispatch, useSelector } from "react-redux";
import { generalStateStory } from "../../store/stories/selectors";
import type {} from "redux-thunk/extend-redux";
import "./index.scss";
import PartialStory from "../../components/Story/PartialStory";
import { StoryOutputType } from "../../models/enums/story/story-output-type.enum";
import { Link } from "react-router-dom";

const Home: FC = () => {
  const dispatch = useDispatch();
  const generalState = useSelector(generalStateStory);

  const getData = useCallback(() => {
    dispatch(
      fetchStories({
        page: generalState.page,
        pageSize: generalState.pageSize,
        query: null,
      })
    );
  }, [dispatch, generalState]);

  useEffect(() => {
    getData();
  }, []);

  const testStory = {
    id: "culture/2023/jan/09/alan-sugar-the-apprentice-candidate-milliionaires",
    type: "article",
    sectionId: "culture",
    sectionName: "Culture",
    webPublicationDate: "2023-01-09T15:38:26Z",
    webTitle:
      "Alan Sugar on making The Apprentice: ‘If I was a candidate, I’d win every time’",
    webUrl:
      "https://www.theguardian.com/culture/2023/jan/09/alan-sugar-the-apprentice-candidate-milliionaires",
    apiUrl:
      "https://content.guardianapis.com/culture/2023/jan/09/alan-sugar-the-apprentice-candidate-milliionaires",
    isHosted: false,
    pillarId: "pillar/arts",
    pillarName: "Arts",
    fields: {
      headline:
        "The Written World and the Unwritten World by Italo Calvino review – exquisite flights of imagination",
      trailText:
        "Calvino ponders life, literature and the mysterious spaces in between in this rich collection of essays, reviews, interviews and more",
      body: '<p>Italo Calvino, novelist, essayist, critic, editor, publisher, lived a life that seemed made of words. Like his Baron in the Trees, the legendary aristocrat who escaped in childhood to the upper canopy of a forest, he often seemed reluctant to be grounded on terra firma, much preferring flights of imagination.</p> <p>In the title essay here, the piece that gives this collection its guiding philosophy, he explains something of that habit of mind. In his youth, he suggests, he had the belief that fictional worlds could illuminate the real world and vice versa. As he grew older, however, he was plagued by the sense that while “within books, experience is always possible… its reach does not extend beyond the blank margin of the page”. The external world, meanwhile, remained to him a stubborn and unpredictable mystery, one that never stopped “surprising me, frightening me, disorienting me”. This predicament, Calvino argues, was particularly stark for an Italian. His was a country that in its politics refused beginnings and middles and endings, a place “where many mysterious things happen, which are every day widely discussed and commented on but never solved; where every event hides a secret plot”.</p> <p>Throughout his writing career, Calvino found brilliant, comic and sad ways to dramatise that dislocation. In his 1972 novel <em><a href="https://guardianbookshop.com/invisible-cities-9780099429838">Invisible Cities</a></em>, he had Marco Polo give the Great Khan a blueprint for numerous possible cities, each one Venice and not Venice. In <em><a href="https://guardianbookshop.com/if-on-a-winters-night-a-traveller-9780099430896">If on a </a></em><em><a href="https://guardianbookshop.com/if-on-a-winters-night-a-traveller-9780099430896">Winter’s </a></em><em><a href="https://guardianbookshop.com/if-on-a-winters-night-a-traveller-9780099430896">Night</a></em><em><a href="https://guardianbookshop.com/if-on-a-winters-night-a-traveller-9780099430896"> a Traveller</a></em> (1979), he created the ultimate shaggy dog story about the experience of reading shaggy dog stories. And in the sketches of his alter ego <em>Mr Palomar</em> (1983), he described the ways in which the five senses informed us about the world and kept us locked inside our own heads: when he is stargazing, confronted by the infinity of creation, Mr Palomar mostly frets about the question of whether he should put on or take off his spectacles when using a telescope.</p>  <aside class="element element-pullquote element--inline"> <blockquote> <p>Few writers or readers have ever been more alive to the battle between absorption and distraction when faced with words on a page</p> </blockquote> </aside>  <p>These essays, which take in Calvino’s thoughts on sitting down and procrastination, as well as some of his more familiar preoccupations with folk tales and the limits of science, are not only the backstory to his fictional method, but often another expression of it. Several come in response to newspaper inquiries. Calvino’s eventual response to a <em>Liberation</em> special on “why do you write?” becomes a meditation not only on his restless doubts (“I write because I’m dissatisfied with what I have already written and would like in some ways to correct and complete it, offer an alternative”) but also a kind of deconstruction of the unconscious strategies of the creative process: “I have the thought: Ah! How I’d like to write like X! Too bad it’s completely beyond my capabilities! Then I try to imagine this impossible undertaking, I think of the book I will never write but would like to read, to put beside other beloved books on an ideal shelf. And suddenly some words, sentences appear in my mind…”</p> <p>Calvino always prized lightness, a kind of writing and reading that was the opposite of a hard slog. In the reviews collected here, he often invites readers to skip certain passages or chapters in the books at hand. In his electric essay about Freeman Dyson’s <em>Disturbing the Universe</em>, for example, he advises time-strapped readers to begin with chapter three and then make sure to alight on chapter 16 and so on. Few writers or readers have ever been more alive to the battle between absorption and distraction when faced with words on a page.</p> <p>There is a sort of comedy in this, but also a statement of intent. Some of the essays here take on the critical theory of the French post-structuralists, the nouveau roman of <a href="https://www.theguardian.com/books/booksblog/2010/may/13/in-theory-alain-robbe-grillet-fiction">Alain Robbe-Grillet</a>. In some senses Calvino was a fellow traveller in that project to remake the novel, to find revolutionary ways to remove the author from the practice of writing and reading. But he was also aware of the fact that there was an inbuilt hubris in artistic manifestos. His own practice was closer to Beckett’s: try again, fail better.</p> <p>Inevitably in a collection like this there are pieces that feel a little outdated or obscure. But there are enough gems to make the excursions worthwhile. The time-strapped reader would be advised to make sure they stop at the little essay that begins on page 264, an account of a board game between Montezuma and Cortés in which the stakes are immense – “for the Mexicans the end of the world… for the Spanish the start of a new era”. What follows is a short history of imperialism and subjugation, and an inspired and playful examination of rival human worldviews. It is also an exquisite little world made of language, one that Calvino delighted in, so we can too.</p> <p>• <em>The Written World and the Unwritten World: Collected Non-Fiction</em> by Italo Calvino (translated by Ann Goldstein) is published by Penguin Classics (£10.99). To support the <em>Guardian</em> and <em>Observer</em> order your copy at <a href="https://guardianbookshop.com/the-written-world-and-the-unwritten-world-9780141394923">guardianbookshop.com</a>. Delivery charges may apply</p>',
      thumbnail:
        "https://media.guim.co.uk/0fbd22dca837296d015b677468b318daea9a8aba/0_125_5444_3268/500.jpg",
    },
  };

  return (
    <Page title="Home">
      <div className="page-container">
        <section className="primary-section">
          <div className="main-page-title-container">
            <div className="left-part">
              <h2 className="main-page-title">Top stories</h2>
              <Link to={"/bookmarks"} className="bookmark-link">
                <span>
                  {" "}
                  <img
                    alt="bookmark"
                    className="bookmark-icon"
                    src="/images/bookmarkon-icon@2x.svg"
                  />
                </span>
                View BOOKMARK
              </Link>
            </div>
            <div className="right-part">
              <select value={"A"}>
                <option value="A">Apple</option>
                <option value="B">Banana</option>
                <option value="C">Cranberry</option>
              </select>
            </div>
          </div>

          <div className="top-story-container">
            <div className="head-line-story">
              <PartialStory
                story={testStory}
                storyOutputType={StoryOutputType.HeadLine}
              />
            </div>
            <PartialStory
              story={testStory}
              storyOutputType={StoryOutputType.HomeTop}
            />
            <PartialStory
              story={testStory}
              storyOutputType={StoryOutputType.HomeTop}
            />
            <PartialStory
              story={testStory}
              storyOutputType={StoryOutputType.HomeTopImageLess}
            />
            <PartialStory
              story={testStory}
              storyOutputType={StoryOutputType.HomeTopImageLess}
            />
          </div>

          <div className="bottom-story-container">
            <PartialStory story={testStory} />
            <PartialStory story={testStory} />
            <PartialStory story={testStory} />
          </div>
        </section>

        <section className="secondary-section">
          <h2 className="secondary-title">Sports</h2>
          <div className="secondary-story-container">
            <PartialStory
              story={testStory}
              storyOutputType={StoryOutputType.MainNoTriadText}
            />
            <PartialStory
              story={testStory}
              storyOutputType={StoryOutputType.MainNoTriadText}
            />
            <PartialStory
              story={testStory}
              storyOutputType={StoryOutputType.MainNoTriadText}
            />
          </div>
        </section>
      </div>
    </Page>
  );
};

export default Home;
