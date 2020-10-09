import React, { useState } from 'react';
import { DraggableList } from './DraggableList';

export const DragAndDropValues = (props) => {

  const { valuesList, setValuesList } = props;

  return (
    <>
      <DraggableList
        valuesList={valuesList}
        setValuesList={setValuesList}
      />
    </>
  );
};
