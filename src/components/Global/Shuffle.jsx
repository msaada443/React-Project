import ListItem from "./ListItem";

const Shuffle = () => {
  return (
    <ul className="shuffle">
      <ListItem
        activeItem={({ isActive }) => (isActive ? "active" : "")}
        navItem="All"
      />
      <ListItem
        activeItem={({ isActive }) => (isActive ? "" : "")}
        navItem="Digital Marketing"
      />
      <ListItem
        activeItem={({ isActive }) => (isActive ? "" : "")}
        navItem="Website development"
      />
      <ListItem
        activeItem={({ isActive }) => (isActive ? "" : "")}
        navItem="Software"
      />
    </ul>
  );
};

export default Shuffle;
