import React from 'react';

const ToDo = (props) => {
  return (
    <div>
      <span>{props.title}</span>
      <span>{props.done}</span>
    </div>
  );
};

export default ToDo;
