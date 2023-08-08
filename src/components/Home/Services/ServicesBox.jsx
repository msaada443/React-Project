import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ServicesBox = (props) => {
  return (
    <div className="services-box">
      <div className="img">
        <img src={props.srcImg} alt="img" />
      </div>
      <div className="text">
        <h3>{props.head}</h3>
        <ul>{props.children}</ul>
        <span>
          learn more
          <FontAwesomeIcon
            icon={faAngleRight}
            size="2x"
            className="change-background"
          />
        </span>
      </div>
    </div>
  );
};

export default ServicesBox;
