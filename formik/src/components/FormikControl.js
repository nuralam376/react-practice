import ChakraInput from "./ChakraInput";
import Checkboxgroup from "./Checkboxgroup";
import DatePicker from "./DatePicker";
import Input from "./Input";
import RadioButtons from "./RadioButtons";
import Select from "./Select";
import TextArea from "./TextArea";

export default function FormikControl(props) {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <Checkboxgroup {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    case "chakrainput":
      return <ChakraInput {...rest} />;
    default:
      return null;
  }
}
