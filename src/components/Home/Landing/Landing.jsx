const Landing = (props) => {
  return (
    <section className="landing">
      <div className="text">
        <h1>{props.children}</h1>
        <p>{props.text}</p>
        <button>{props.btnContent}</button>
      </div>
      <div className="img">
        <img src={props.srcImg} alt="img" />
      </div>
    </section>
  );
};

export default Landing;
