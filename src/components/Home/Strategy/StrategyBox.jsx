const StrategyBox = (props) => {
  return (
    <div className="strategy-box">
      <div className={props.StrategyClass}>{props.number}</div>
      <h6>{props.title}</h6>
      <p>{props.text}</p>
    </div>
  );
};

export default StrategyBox;
