import React from "react";

const ChildComponent = (props) => {
  return (
    <div>
      <h3>Child Component</h3>
      <p>Message from Parent: {props.message}</p>
    </div>
  );
};

export default ChildComponent;
