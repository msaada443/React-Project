const TeamBox = (props) => {
  return (
    <div className="projects-box">
      <img src={props.srcImg} alt="img" />
      <h4>{props.title}</h4>
      <ul>
        <li>{props.item}</li>
      </ul>
      <p>{props.text}</p>
    </div>
  );
};

export default TeamBox;
