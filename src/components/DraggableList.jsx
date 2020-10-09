import React from 'react';

export const DraggableList = (props) => {

  const { valuesList } = props;

  return (
    <>
      <ul>
        {valuesList.map((value, idx) => (<li key={`${value}_${idx}`}>{value}</li>))}
      </ul>
    </>
  );
};
