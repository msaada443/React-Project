const FooterInfo = (props) => {
  return (
    <div className="info">
      <img src={props.srcImg} alt="img" />
      <p>{props.content}</p>
    </div>
  );
};

export default FooterInfo;
