import { CustomerBox } from "../../index";
import IMAGES from "../../../assets/index";

const CustomerContainer = () => {
  return (
    <>
      <div className="customer-container">
        <CustomerBox
          srcImg={IMAGES.Img13}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam"
        />
        <CustomerBox
          srcImg={IMAGES.Img14}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam"
        />
        <CustomerBox
          srcImg={IMAGES.Img15}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam"
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

export default CustomerContainer;
