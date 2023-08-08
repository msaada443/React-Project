import {
  AboutLanding,
  Container,
  HeadingContent,
  MainHeading,
  TeamContainer,
  CustomerContainer,
  FactsContainer,
} from "../components/index";
import IMAGES from "../assets/index";

const About = () => {
  return (
    <main>
      <Container sectionName="about">
        <HeadingContent
          head="About US"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          srcImg={IMAGES.Img23}
        />
      </Container>

      <AboutLanding
        srcImg={IMAGES.Img24}
        head="About The Company"
        text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      >
        Secure <span className="span-about">IT Solutions</span> for a more
        <br />
        secure environment
      </AboutLanding>

      <Container sectionName="projects">
        <MainHeading head="Our Awesome Team" text="you can see our projects" />
        <TeamContainer />
      </Container>

      <div className="customer">
        <MainHeading head="Happy customer" text="Clients' reviews" />
        <CustomerContainer />
      </div>

      <Container sectionName="facts">
        <MainHeading
          head="company facts"
          text="The service we offer is specifically designed We are proud of our
                        design team"
        />
        <FactsContainer />
      </Container>
    </main>
  );
};

export default About;
