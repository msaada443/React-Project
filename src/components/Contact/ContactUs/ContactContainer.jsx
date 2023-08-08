import { ContactBox } from "../../index";
import IMAGES from "../../../assets/index";
const ContactContainer = () => {
  return (
    <div className="contact">
      <ContactBox
        srcImg={IMAGES.Img35}
        title="Address:"
        text="28 Division St, New York, NY 10002, USA"
      />

      <ContactBox
        srcImg={IMAGES.Img36}
        title="Email:"
        text="Startnext@Gmail.Com"
      />

      <ContactBox
        srcImg={IMAGES.Img37}
        title="Phone:"
        text="+ (321) 984 75413545"
      />
    </div>
  );
};

export default ContactContainer;
