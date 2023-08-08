const AboutLanding = (props) => {
  return (
    <div className="container">
      <section className="landing">
        <div className="img">
          <img src={props.srcImg} alt="img" />
        </div>
        <div className="text">
          <h3>{props.head}</h3>
          <h1> {props.children} </h1>
          <p>{props.text}</p>
        </div>
      </section>
    </div>
  );
};

export default AboutLanding;
