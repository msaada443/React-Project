import { Item, ServicesBox } from "../../index";
import IMAGES from "../../../assets/index";

const ServicesContainer = () => {
  return (
    <div className="services-container">
      <ServicesBox srcImg={IMAGES.Img2} head="Digital Marketing">
        <Item item="Google Ads" />
        <Item item="Facebook Ads" />
        <Item item="Instagram Ads" />
        <Item item="Search Engine Optimization" />
        <Item item="Influencer Marketing" />
      </ServicesBox>
      <ServicesBox srcImg={IMAGES.Img3} head="Website development & design">
        <Item item="Wordpress Development" />
        <Item item="Ecommerce" />
        <Item item="Website Hosting" />
        <Item item="UI Design" />
        <Item item="Copywriting" />
        <Item item="Speed Optimization" />
      </ServicesBox>
      <ServicesBox srcImg={IMAGES.Img4} head="Software">
        <Item item="Setting Up CRM" />
        <Item
          style={{ lineHeight: "1.5", width: "210px" }}
          item="Software Recommendation For A Specific Business Type"
        />
      </ServicesBox>
      <ServicesBox srcImg={IMAGES.Img5} head="Graphic design & Branding">
        <Item item="Brand Guidelines" />
        <Item item="Brand Identity" />
        <Item item="Color Palette" />
        <Item item="Social Media Designs" />
        <Item item="Printable" />
      </ServicesBox>
    </div>
  );
};

export default ServicesContainer;
