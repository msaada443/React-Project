import { CompanyBox } from "../../index";
import IMAGES from "../../../assets/index";

const CompanyContainer = () => {
  return (
    <div className="company-container">
      <CompanyBox
        srcImg={IMAGES.Img10}
        number="1000+"
        text="Completed projects"
      />
      <CompanyBox
        srcImg={IMAGES.Img11}
        number="50K+"
        text="Completed projects"
      />
      <CompanyBox
        srcImg={IMAGES.Img12}
        number="20+"
        text="Completed projects"
      />
    </div>
  );
};

export default CompanyContainer;
