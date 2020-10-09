import React, { useState } from 'react';
import { DraggableList } from './DraggableList';

export const DragAndDropValues = (props) => {

  const { valuesList } = props;

  return (
    <>
      <DraggableList
        valuesList={valuesList}
      />
    </>
  );
};
