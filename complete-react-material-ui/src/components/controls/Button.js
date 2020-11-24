import { Button as MuiButton, makeStyles } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  label: {
    textTransform: "none",
  },
}));

export default function Button(props) {
  const classes = useStyle();
  const { text, size, color, variant, onClick, ...other } = props;
  return (
    <MuiButton
      size={size || "large"}
      color={color || "primary"}
      variant={variant || "contained"}
      onClick={onClick}
      {...other}
      classes={{ root: classes.root, label: classes.label }}
    >
      {text}
    </MuiButton>
  );
}
