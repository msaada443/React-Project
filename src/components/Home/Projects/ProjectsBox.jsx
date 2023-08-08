const ProjectsBox = (props) => {
  return (
    <div className="projects-box">
      <img src={props.srcImg} alt="img" />
      <h4>{props.title}</h4>
      <ul>{props.children}</ul>
    </div>
  );
};

export default ProjectsBox;
