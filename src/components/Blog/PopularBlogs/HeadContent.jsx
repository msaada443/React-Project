const HeadContent = (props) => {
  return (
    <div className="main-heading">
      <h2 style={props.style}>{props.head}</h2>
    </div>
  );
};

export default HeadContent;
