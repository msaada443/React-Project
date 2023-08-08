import { FormInput, FormSelect } from "../../index";

const FormBox = () => {
  return (
    <div className="form-box">
      <FormInput type="text" placeHolder="First Name" />
      <FormInput type="text" placeHolder="Last Name" />
      <FormInput type="email" placeHolder="Email" />
      <FormSelect name="departments" id="department" />
      <textarea placeholder="Message" name="" id="" cols="" rows="5"></textarea>
    </div>
  );
};

export default FormBox;
