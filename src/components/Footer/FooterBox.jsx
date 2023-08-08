import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const FooterBox = (props) => {
  return (
    <div className="footer-box">
      <p>{props.text}</p>
      <input type={props.input} placeholder={props.placeHolder} />
      <div className="icons">
        <div className="icon">
          <FontAwesomeIcon
            icon={faAngleRight}
            size="2x"
            className="change-background"
            style={{ fontSize: 11, color: "#1380D0" }}
          />
        </div>
      </div>
    </div>
  );
};

export default FooterBox;
