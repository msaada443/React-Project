import IMAGES from "../assets/index";
import {
  BlogHeading,
  Container,
  NewsContainer,
  Shuffle,
} from "../components/index";

const News = () => {
  return (
    <main>
      <Container style={{ paddingBottom: 200 }} sectionName="about">
        <BlogHeading head="Blog Title" srcImg={IMAGES.Img23} />
      </Container>

      <Container sectionName="projects">
        <Shuffle />
        <NewsContainer />
      </Container>
    </main>
  );
};

export default News;
