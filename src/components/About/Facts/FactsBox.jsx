const FactsBox = (props) => {
  return (
    <div className="facts-box">
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
};

export default FactsBox;
