import React from 'react';

export const ValueModal = (props) => {
  const {rejectAndAdvanceValue, advanceValue, list, valueIdx} = props;
  let testValue = list[valueIdx];

  /**
   * Button component that advances value on display from props.list
   * Calls helper function advanceValue()
   */
  const AcceptButton = () => (
    <button onClick={advanceValue}>Accept</button>
  );

  /**
   * Button component removes value on display from props.list
   * calls helper function rejectAndAdvanceValue()
   */
  const RejectButton = () => (
    <button onClick={() => rejectAndAdvanceValue(testValue)}>Reject</button>
  );

  return (
    <>
      {valueIdx}
      {<h2>{list[valueIdx]}</h2>}
      <span><RejectButton /><AcceptButton /></span>
    </>
  )
}
