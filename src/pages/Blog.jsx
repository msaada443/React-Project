import {
  BlogCards,
  Container,
  HeadContent,
  HeadingContent,
  TitleContainer,
} from "../components/index";
import IMAGES from "../assets/index";

const Blog = () => {
  return (
    <main>
      <Container style={{ paddingBottom: 200 }} sectionName="about">
        <HeadingContent head="Blog Title" srcImg={IMAGES.Img23} />
      </Container>

      <Container sectionName="title">
        <TitleContainer />
      </Container>

      <Container sectionName="projects">
        <HeadContent head="Popular Blogs" style={{ marginBottom: 40 }} />
        <BlogCards />
      </Container>
    </main>
  );
};

export default Blog;
