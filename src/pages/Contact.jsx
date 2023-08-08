import {
  ContactLanding,
  Container,
  FormContainer,
  HeadingContent,
  MainHeading,
  Map,
} from "../components/index";
import IMAGES from "../assets/index";

const Contact = () => {
  return (
    <main>
      <Container style={{ paddingBottom: 200 }} sectionName="about">
        <HeadingContent
          head="Contact US"
          text="Keep in Touch With us"
          srcImg={IMAGES.Img23}
        />
      </Container>

      <ContactLanding
        srcImg={IMAGES.Img34}
        head="Contact with us know"
        title="We are with you to help you, just contact us"
      />

      <Container sectionName="form-info">
        <MainHeading
          head="Drop Us a Line"
          text=" Fill out the contact form and we will get back to you shortly."
        />
        <FormContainer />
      </Container>

      <Map />
    </main>
  );
};

export default Contact;
