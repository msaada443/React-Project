import { Link } from "react-router-dom";

const Logo = (props) => {
  return (
    <>
      <Link to="/home" className="logo">
        <img src={props.image} alt={props.alt} />
      </Link>
    </>
  );
};

export default Logo;
