import { OffersBox, Item } from "../../index";
import IMAGES from "../../../assets/index";
const OffersContainer = () => {
  return (
    <div className="services-container">
      <OffersBox
        srcImg={IMAGES.Img2}
        title="Digital Marketing"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      >
        <Item item="Google Ads" />
        <Item item="Facebook Ads" />
        <Item item="Instagram Ads" />
        <Item item="Search Engine Optimization" />
        <Item item="Influencer Marketing" />
      </OffersBox>

      <OffersBox
        srcImg={IMAGES.Img3}
        title="Website development & design"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      >
        <Item item="Wordpress Development" />
        <Item item="Ecommerce" />
        <Item item="Website Hosting" />
        <Item item="UI Design" />
        <Item item="Copywriting" />
        <Item item="Speed Optimization" />
      </OffersBox>

      <OffersBox
        srcImg={IMAGES.Img4}
        title="Software"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      >
        <Item item="Setting Up CRM" />
        <Item
          style={{ lineHeight: 1.5, width: 210 }}
          item=" Software Recommendation For A Specific Business Type"
        />
      </OffersBox>

      <OffersBox
        srcImg={IMAGES.Img5}
        title="Graphic design & Branding"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      >
        <Item item="Brand Guidelines" />
        <Item item="Brand Identity" />
        <Item item="Color Palette" />
        <Item item="Social Media Designs" />
        <Item item="Printable" />
      </OffersBox>
    </div>
  );
};

export default OffersContainer;
