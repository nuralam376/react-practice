import React from "react";

const Person = (props) => {
  console.log(props);
  return (
    <div>
      <h3>
        Person name : {props.name} and Age : {props.age}
      </h3>
      <p>Children : {props.children}</p>
    </div>
  );
};

export default Person;
