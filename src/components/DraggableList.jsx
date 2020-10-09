import React, { useRef } from 'react';

export const DraggableList = (props) => {

  const draggingItem = useRef();
  const dragOverItem = useRef();

  const { valuesList, setValuesList } = props;

  const handleDragStart = (e, position) => {
    draggingItem.current = position;
    console.log(e.target.innerHTML);
  };

  const handleDragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  }

  const handleDragEnd = (e) => {
    const listCopy = valuesList.slice();
    const draggingItemContent = listCopy[draggingItem.current];
    listCopy.splice(draggingItem.current, 1);
    listCopy.splice(dragOverItem.current, 0, draggingItemContent);

     draggingItem.current = null;
     dragOverItem.current = null;
     setValuesList(listCopy);
  };

  return (
    <>
      <ul>
        {
          valuesList && valuesList.map((value, idx) => (
            <li
              onDragStart={(e) => handleDragStart(e, idx)}
              onDragEnter={(e) => handleDragEnter(e, idx)}
              onDragOver={(e) => e.preventDefault()}
              onDragEnd={handleDragEnd}
              style={{ 'list-style': 'none', 'font-weight': 400 }}
              key={`${value}_${idx}`}
              draggable
            >
              {value}
            </li>
          ))
        }
      </ul>
    </>
  );
};
