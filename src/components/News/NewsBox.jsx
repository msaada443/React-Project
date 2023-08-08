import { Link } from "react-router-dom";
import { Item } from "../index";

const NewsBox = (props) => {
  return (
    <div className="projects-box">
      <img src={props.srcImg} alt="img" />
      <h4>
        <Link to={props.to} style={props.style}>
          {props.title}
        </Link>
      </h4>
      <ul>
        <Item item={props.item} />
      </ul>
      <p>{props.text}</p>
      <p>{props.date}</p>
    </div>
  );
};

export default NewsBox;
