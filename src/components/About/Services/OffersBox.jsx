import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const OffersBox = (props) => {
  return (
    <div className="services-box">
      <div className="img">
        <img src={props.srcImg} alt="img" />
      </div>
      <div className="text">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
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

export default OffersBox;
