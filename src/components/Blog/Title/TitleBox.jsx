const TitleBox = (props) => {
  return (
    <div className="title-box">
      <img src={props.srcImg} alt="img" />
      <div className="content">
        <button>{props.btnName}</button>
        <p>{props.date}</p>
      </div>
      <h1 style={props.styleHead}>{props.head}</h1>
      <p style={props.styleText}>{props.text1}</p>
      <p>{props.text2}</p>
    </div>
  );
};

export default TitleBox;
