import React, { useState, useEffect } from 'react';

export const ValueModal = (props) => {
  const {advanceValue, list, valueIdx} = props;
  const Button = () => (
    <button onClick={advanceValue}>Next</button>
  );

  return (
    <>
      {valueIdx}
      {<h2>{list[valueIdx]}</h2>}
      <Button />
    </>
  )
}
