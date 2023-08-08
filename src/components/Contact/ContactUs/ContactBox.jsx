const ContactBox = (props) => {
  return (
    <div className="contact-box">
      <div className="desc">
        <img src={props.srcImg} alt="img" />
        <h4>{props.title}</h4>
      </div>
      <p>{props.text}</p>
    </div>
  );
};

export default ContactBox;
