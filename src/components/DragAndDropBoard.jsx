import React from 'react';

export const DragAndDropBoard = (props) => {

  const drop = (event) => {
    event.preventDefault();
    const cardId = event.dataTransfer.getData('card_id');
    const card = document.getElementById(cardId);
    card.style.display = 'block';
    event.target.appendChild(card);
  }

  const dragOver = (event) => {
    event.preventDefault();
  }

  return (
    <div
      id={props.id}
      onDrop={drop}
      onDragOver={dragOver}
      className={props.className}
    >
      {props.children}
    </div>
  );
}
