import { ContactContainer } from "../../index";

const ContactLanding = (props) => {
  return (
    <div className="container">
      <div className="landing">
        <div className="img">
          <img src={props.srcImg} alt="img" />
        </div>
        <div className="text">
          <h3>{props.head}</h3>
          <h1>{props.title}</h1>
          <ContactContainer />
        </div>
      </div>
    </div>
  );
};

export default ContactLanding;
