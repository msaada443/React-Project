import { FormBox } from "../../index";

const FormContainer = () => {
  const handleForm = (even) => {
    even.preventDefault();
  };
  return (
    <form action="" onClick={handleForm}>
      <FormBox />
      <input type="submit" value="Send Message" />
    </form>
  );
};

export default FormContainer;
