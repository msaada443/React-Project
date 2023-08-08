import { TeamBox } from "../../index";
import IMAGES from "../../../assets/index";
const TeamContainer = () => {
  return (
    <>
      <div className="projects-container">
        <TeamBox
          srcImg={IMAGES.Img25}
          title="Person Name"
          item="UI/UX Designer"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing"
        />
        <TeamBox
          srcImg={IMAGES.Img26}
          title="Person Name"
          item="Digital Marketing"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing"
        />
        <TeamBox
          srcImg={IMAGES.Img27}
          title="Person Name"
          item="UI/UX Designer"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing"
        />
        <TeamBox
          srcImg={IMAGES.Img28}
          title="Person Name"
          item="Digital Marketing"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing"
        />
      </div>
      <div className="tabs">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default TeamContainer;
