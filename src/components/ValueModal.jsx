import React from 'react';

export const ValueModal = (props) => {
  const {rejectAndAdvanceValue, advanceValue, valuesList, valueIdx} = props;
  let testValue = valuesList[valueIdx];

  /**
   * Button component that advances value on display from props.valuesList
   * Calls helper function advanceValue()
   */
  const AcceptButton = () => (
    <button
      className='modal__btn--accept'
      onClick={advanceValue}
    >
      Accept
    </button>
  );

  /**
   * Button component removes value on display from props.valuesList
   * calls helper function rejectAndAdvanceValue()
   */
  const RejectButton = () => (
    <button
      className='modal__btn--reject'
      onClick={() => rejectAndAdvanceValue(testValue)}
    >
      Reject
    </button>
  );

  return (
    <>
      <div className='modal__wrapper'>
        {<h2 className='modal__header'>{valuesList[valueIdx]}</h2>}
        <span className='modal__btn--span'>
          <RejectButton />
          <AcceptButton />
        </span>
      </div>
    </>
  )
}
