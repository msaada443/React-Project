const BlogHeading = (props) => {
  return (
    <div className="about-container">
      <div className="text">
        <h1>{props.head}</h1>
      </div>
      <img src={props.srcImg} alt="img" />
    </div>
  );
};

export default BlogHeading;
