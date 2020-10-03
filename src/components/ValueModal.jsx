import React from 'react';

export const ValueModal = (props) => {
  const {rejectAndAdvanceValue, advanceValue, valuesList, valueIdx} = props;
  let testValue = valuesList[valueIdx];

  /**
   * Button component that advances value on display from props.valuesList
   * Calls helper function advanceValue()
   */
  const AcceptButton = () => (
    <button onClick={advanceValue}>Accept</button>
  );

  /**
   * Button component removes value on display from props.valuesList
   * calls helper function rejectAndAdvanceValue()
   */
  const RejectButton = () => (
    <button onClick={() => rejectAndAdvanceValue(testValue)}>Reject</button>
  );

  return (
    <>
      {valueIdx}
      {<h2>{valuesList[valueIdx]}</h2>}
      <span><RejectButton /><AcceptButton /></span>
    </>
  )
}
