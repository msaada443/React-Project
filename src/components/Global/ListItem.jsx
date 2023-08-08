import { NavLink } from "react-router-dom";

const ListItem = (props) => {
  return (
    <li>
      <NavLink className={props.activeItem} to={props.to}>
        {props.navItem}
      </NavLink>
    </li>
  );
};

export default ListItem;
