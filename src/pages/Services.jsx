import {
  Container,
  HeadingContent,
  OffersContainer,
} from "../components/index";
import IMAGES from "../assets/index";

const Services = () => {
  return (
    <main>
      <Container sectionName="about">
        <HeadingContent
          head="Our Services"
          text="The service we offer is specifically designed
                            to meet your needs."
          srcImg={IMAGES.Img23}
        />
      </Container>

      <Container sectionName="services">
        <OffersContainer />
      </Container>
    </main>
  );
};

export default Services;
