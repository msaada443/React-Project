const FormOption = (props) => {
  return (
    <option
      className={props.classTitle}
      disabled={props.disabled}
      value={props.value}
    >
      {props.title}
    </option>
  );
};

export default FormOption;
