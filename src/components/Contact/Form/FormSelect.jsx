import { FormOption } from "../../index";

const FormSelect = (props) => {
  return (
    <select name={props.name} id={props.id}>
      <FormOption classTitle="title" title="Select A Department" disabled />
      <FormOption value="dept1" title="Department 1" />
      <FormOption value="dept2" title="Department 2" />
      <FormOption value="dept3" title="Department 3" />
    </select>
  );
};

export default FormSelect;
