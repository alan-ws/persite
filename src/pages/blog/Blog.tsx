import { styled } from "goober";
import { useState } from "react";
import { resolveRoute } from "../../lib/utils";
import { BlogStore } from "../../store";

const Post = styled("div")`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
const Header = styled("div")`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
`;
const Banner = styled("div")`
  background-image: url("https://download.cnet.com/a/img/resize/cdb32d38a2de6a9dc6bb51d7f3c216350befd41f/hub/2020/02/22/5814e528-9a28-491b-953b-bf9ec7fccf79/logo400x400.png?auto=webp&fit=crop&height=675&width=1200");
  height: 350px;
  width: 1080px;
  margin-top: 32px;
  margin-bottom: 54px;
`;
const Play = styled("div")`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: black;
`;
const PlayerWrapper = styled("div")<{ isOpen: boolean }>`
  ${(props) => (props.isOpen ? `` : `display: none`)};
  width: 70%;
  margin: 0 auto;
`;
const Player = styled("div")`
  position: fixed;
  bottom: 0;
  height: 72px;
  width: 900px;
  margin: 0 auto;
  background-color: black;
`;
const Section = styled("section")`
  display: flex;
`;
const SocialLinks = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 0.2;
  align-items: flex-end;
  padding-right: 16px;
`;
const Article = styled("article")`
  flex: 0.8;

  & > p {
    padding: 0 88px 0 88px;
  }
`;
const Navigation = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 0.2;
`;
const TitleWrapper = styled("div")`
  display: flex;
`;
const Title = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 0.8;
`;
const PlayWrapper = styled("div")`
  display: flex;
  flex: 0.2;
  align-items: center;
  justify-content: center;
`;
const SocialBubble = styled("div")`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: black;
  margin: 8px;
  color: white;
  font-weight: bold;
`;

function Main() {
  const [loadPlayer, setLoadPlayer] = useState<boolean>(false);
  function handlePlayClick() {
    setLoadPlayer((prev) => !prev);
  }

  return (
    <Post>
      <Header>
        <h3>Sept. 4th 2021</h3>
        <TitleWrapper>
          <Title>
            <h1>iPhone 11 can't get any better</h1>
            <div>iphone / tech / mobile / phone</div>
          </Title>
          <PlayWrapper>
            <Play onClick={handlePlayClick} />
          </PlayWrapper>
        </TitleWrapper>
      </Header>
      <Banner />
      <Section>
        <SocialLinks>
          <SocialBubble>
            <a href="https://www.linkedin.com/sharing/share-offsite/?url=">L</a>
          </SocialBubble>
          <SocialBubble>F</SocialBubble>
          <SocialBubble>
            <a href="https://twitter.com/intent/tweet?text=Hello%20world">T</a>
          </SocialBubble>
        </SocialLinks>
        <Article>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
            the cites of the word in classical literature, discovered the undoubtable source. Lorem
            Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
            Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
            theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk
            of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
            1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
            in their exact original form, accompanied by English versions from the 1914 translation
            by H. Rackham.
          </p>
        </Article>
        <Navigation>
          <h3>Menu</h3>
          <p>Intro</p>
          <p>Main</p>
          <p>End</p>
        </Navigation>
      </Section>
      <PlayerWrapper isOpen={loadPlayer}>
        <Player />
      </PlayerWrapper>
    </Post>
  );
}

export const Blog = resolveRoute(Main, BlogStore.useStore);
