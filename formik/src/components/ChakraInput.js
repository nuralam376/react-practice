import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { Field } from "formik";
import React from "react";
import Input from "./Input";

function ChakraInput(props) {
  const { name, label, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form }) => {
        return (
          <FormControl isInvalid={form.errors[name] && form.touched[name]}>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <Input id={name} {...rest} {...field} />
            <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
}

export default ChakraInput;
