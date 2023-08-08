const HappenedBox = (props) => {
  return (
    <div className="happened-box">
      <img className={props.editImg} src={props.srcImg} alt="img" />
      <h6>{props.head}</h6>
      <p>{props.text}</p>
    </div>
  );
};

export default HappenedBox;
