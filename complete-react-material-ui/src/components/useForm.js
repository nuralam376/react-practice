import { makeStyles } from "@material-ui/core";
import { useState } from "react";

export const useForm = (initialValues, validateOnChange = false, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    if (validateOnChange) {
      validate({ [name]: value });
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };
  return {
    values,
    setValues,
    errors,
    setErrors,
    resetForm,
    handleInputChange,
  };
};

const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root ": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

export const Form = (props) => {
  const classes = useStyle();
  const { children, ...other } = props;
  return (
    <form {...other} className={classes.root} autoComplete="off">
      {children}
    </form>
  );
};
