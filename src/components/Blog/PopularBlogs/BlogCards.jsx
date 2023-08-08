import { NewsBox } from "../../index";
import IMAGES from "../../../assets/index";
const BlogCards = () => {
  return (
    <div className="projects-container">
      <NewsBox
        srcImg={IMAGES.Img29}
        style={{ color: "#282828" }}
        href="blog.html"
        title="Blog Title"
        item="UI/UX Designer"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing"
        date="Techier Oct 20, 2022"
      />

      <NewsBox
        srcImg={IMAGES.Img30}
        style={{ color: "#282828" }}
        href="blog.html"
        title="Blog Title"
        item="Digital Marketing"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing"
        date="Techier Oct 20, 2022"
      />
      <NewsBox
        srcImg={IMAGES.Img31}
        style={{ color: "#282828" }}
        href="blog.html"
        title="Blog Title"
        item="UI/UX Designer"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing"
        date="Techier Oct 20, 2022"
      />

      <NewsBox
        srcImg={IMAGES.Img32}
        style={{ color: "#282828" }}
        href="blog.html"
        title="Blog Title"
        item="Digital Marketing"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing"
        date="Techier Oct 20, 2022"
      />
    </div>
  );
};

export default BlogCards;
