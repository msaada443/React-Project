const QuestionsBox = (props) => {
  return (
    <div className="questions-box">
      <div className="accordion mark"></div>
      <h5>{props.head}</h5>
      <p className="info hide">{props.text}</p>
    </div>
  );
};

export default QuestionsBox;
