const CompanyBox = (props) => {
  return (
    <div className="company-box">
      <div className="company-img">
        <img src={props.srcImg} alt="img" />
      </div>
      <h3>{props.number}</h3>
      <p>{props.text}</p>
    </div>
  );
};

export default CompanyBox;
