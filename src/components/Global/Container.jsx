const Container = (props) => {
  return (
    <section style={props.style} className={props.sectionName}>
      <div className="container">{props.children}</div>
    </section>
  );
};

export default Container;
