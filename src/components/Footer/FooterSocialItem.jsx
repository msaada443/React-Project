import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const FooterSocialItem = (props) => {
  return (
    <li>
      <Link to="/home" className={props.iconName}>
        <FontAwesomeIcon icon={props.icon} />
      </Link>
    </li>
  );
};

export default FooterSocialItem;
