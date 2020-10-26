import React from "react";
import TextField from "@material-ui/core/TextField";
import { useInput, required } from "react-admin";

const BoundedTextField = (props: any) => {
  const {
    input: { name, onChange, ...rest },
    meta: { touched, error },
    isRequired,
  } = useInput(props);

  return (
    <TextField
      name={name}
      label={props.label}
      onChange={onChange}
      error={!!(touched && error)}
      helperText={touched && error}
      required={isRequired}
      {...rest}
    />
  );
};

export default function TextCustomInput(props: any) {
  const { source, ...rest } = props;

  return (
    <span>
      <BoundedTextField
        source="lat"
        label="Latitude"
        validate={required()}
        {...rest}
      />
    </span>
  );
}
