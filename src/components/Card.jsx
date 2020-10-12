import React from 'react';

export const Card = (props) => {
  const dragStart = (event) => {
    const target = event.target;
    event.dataTransfer.setData('card_id', target.id);

    setTimeout(() => {
      target.style.display = 'none';
    }, 0);
  };
  const dragOver = (event) => event.preventDefault();

  return (
    <li
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      { props.children }
    </li>
  );
};
