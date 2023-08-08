const FooterHeading = (props) => {
  return (
    <div className="footer-heading">
      <p>{props.text}</p>
      <button>{props.btnContent}</button>
    </div>
  );
};

export default FooterHeading;
