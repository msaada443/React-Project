import { ProjectsBox, Item } from "../../index";
import IMAGES from "../../../assets/index";

const ProjectsContainer = () => {
  return (
    <>
      <div className="projects-container">
        <ProjectsBox srcImg={IMAGES.Img6} title="Project name">
          <Item item="UI/UX" />
        </ProjectsBox>
        <ProjectsBox srcImg={IMAGES.Img7} title="Project name">
          <Item item="Digital Marketing" />
        </ProjectsBox>
        <ProjectsBox srcImg={IMAGES.Img8} title="Project name">
          <Item item="Digital Marketing" />
        </ProjectsBox>
        <ProjectsBox srcImg={IMAGES.Img9} title="Project name">
          <Item item="Digital Marketing" />
        </ProjectsBox>
      </div>
      <div className="tabs">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default ProjectsContainer;
