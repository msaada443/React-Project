import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const CustomerBox = (props) => {
  return (
    <div className="customer-box">
      <img src={props.srcImg} alt="img" />
      <p>{props.text}</p>
      <div className="icons">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
    </div>
  );
};

export default CustomerBox;
