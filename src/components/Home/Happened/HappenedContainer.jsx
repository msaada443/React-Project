import { HappenedBox } from "../../index";
import IMAGES from "../../../assets/index";

const HappenedContainer = () => {
  return (
    <div className="happened-container">
      <HappenedBox
        srcImg={IMAGES.Img16}
        head="Techreif is is transforming and scaling
              businesses successfully through services"
        text="Techreif Oct 20, 2022"
      />
      <HappenedBox
        srcImg={IMAGES.Img17}
        head="Techreif is is transforming and scaling
              businesses successfully through services"
        text="Techreif Oct 20, 2022"
      />
      <HappenedBox
        srcImg={IMAGES.Img18}
        head="Techreif is is transforming and scaling
              businesses successfully through services"
        text="Techreif Oct 20, 2022"
      />
      <HappenedBox
        editImg="resize"
        srcImg={IMAGES.Img19}
        head="Techreif is is transforming and scaling
              businesses successfully through services"
        text="Techreif Oct 20, 2022"
      />
    </div>
  );
};

export default HappenedContainer;
