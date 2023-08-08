import { ListItem, Logo } from "../index";
import LogoImg from "../../assets/images//logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const Header = () => {
  //assigning location variable
  const location = useLocation();
  //destructuring pathname from location
  const { pathname } = location;
  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  return (
    <header>
      <div className="container">
        <Logo image={LogoImg} alt="Logo" />
        <nav>
          <FontAwesomeIcon icon={faBars} className="toggle-menu" />
          <ul>
            <ListItem
              to="/home"
              activeItem={splitLocation[1] === "" ? "active" : ""}
              navItem="Home"
            />
            <ListItem
              to="/about"
              activeItem={({ isActive }) => (isActive ? "active" : "")}
              navItem="About"
            />
            <ListItem
              to="/services"
              activeItem={({ isActive }) => (isActive ? "active" : "")}
              navItem="services"
            />
            <ListItem
              to="/latest-news"
              activeItem={({ isActive }) => (isActive ? "active" : "")}
              navItem="latest news"
            />
            <ListItem
              to="/contact-us"
              activeItem={({ isActive }) => (isActive ? "active" : "")}
              navItem="contact US"
            />
            <ListItem
              to="/home"
              activeItem={`shw-bdr ${({ isActive }) =>
                isActive ? "active" : ""}`}
              navItem="support"
            />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
