const MainHeading = (props) => {
  return (
    <div className="main-heading">
      <h2>{props.head}</h2>
      <p>{props.text}</p>
    </div>
  );
};

export default MainHeading;
