const FooterContainer = (props) => {
  return (
    <div className={`footer-box ${props.container}`}>
      <ul className={props.content}>{props.children}</ul>
    </div>
  );
};

export default FooterContainer;
