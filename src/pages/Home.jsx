import {
  CompanyContainer,
  Container,
  CustomerContainer,
  HappenedContainer,
  Landing,
  MainHeading,
  ProjectsContainer,
  QuestionsContainer,
  ServicesContainer,
  Shuffle,
  StrategyContainer,
} from "../components/index";
import IMAGES from "../assets/index";

const Home = () => {
  return (
    <main>
      <div className="container">
        <Landing
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet."
          btnContent="get started"
          srcImg={IMAGES.Img1}
        >
          Secure <span>IT Solutions</span> for a more <br />
          secure environment
        </Landing>
      </div>

      <Container sectionName="services">
        <MainHeading
          head="our services"
          text=" The service we offer is specifically designed to meet your
                needs."
        />
        <ServicesContainer />
      </Container>

      <Container sectionName="projects">
        <MainHeading head="our projects" text="you can see our projects" />
        <Shuffle />
        <ProjectsContainer />
      </Container>

      <Container sectionName="strategy">
        <MainHeading
          head="our strategy"
          text="Amen minim mollie non destruct ullages est sit aliquant dolor"
        />
        <StrategyContainer />
      </Container>

      <Container sectionName="company">
        <MainHeading
          head="company facts"
          text="  The service we offer is specifically designed We are proud of our
            design team"
        />
        <CompanyContainer />
      </Container>

      <div className="customer">
        <MainHeading
          head="Happy customer"
          text="We are proud of our design team"
        />
        <CustomerContainer />
      </div>

      <section className="questions">
        <MainHeading
          head="Frequently asked questions"
          text="The service we offer is specifically designed We are proud of our
          design team"
        />
        <QuestionsContainer />
      </section>

      <Container sectionName="happened">
        <MainHeading
          head="This just happened"
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
        />
        <HappenedContainer />
      </Container>
    </main>
  );
};
export default Home;
