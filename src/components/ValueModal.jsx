import React from 'react';

export const ValueModal = (props) => {
  const {
    displayAcceptedStyle,
    displayRejectedStyle,
    acceptAndAdvanceValue,
    rejectAndAdvanceValue,
    advanceValue,
    regressValue,
    valuesList,
    valueIdx,
    acceptedVal,
    rejectedVal
  } = props;
  let testValue = valuesList[valueIdx];

  /**
   * Button component that regresses value on display from props.valuesList
   * Calls helper function regressValue()
   */
  const PreviousButton = () => (
    <button
      className='modal__value-span--prev btn'
      onClick={regressValue}
    >
      Previous
    </button>
  );

  /**
   * Button component that advances value on display from props.valuesList
   * Functionally the same as AcceptButton with different class
   * Calls helper function advanceValue()
   */
  const NextButton = () => (
    <button
      className='modal__value-span--next btn'
      onClick={advanceValue}
    >
      Next
    </button>
  );

  /**
   * Button component that advances value on display from props.valuesList
   * Calls helper function acceptAndAdvanceValue()
   */
  const AcceptButton = () => (
    <button
      className='modal__accept-dismiss-span--accept btn'
      onClick={acceptAndAdvanceValue}
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
      className='modal__accept-dismiss-span--reject btn'
      onClick={() => rejectAndAdvanceValue(testValue)}
    >
      Reject
    </button>
  );

  return (
    <>
      <div className='modal__wrapper'>
        <span className='modal__value-span'>
          <PreviousButton />
          <h2 className='modal__header'>{valuesList[valueIdx]}</h2>
          <p
            className='modal__message--accepted'
            style={displayAcceptedStyle}
          >
            {`${acceptedVal} Accepted!`}
          </p>
          <p
            className='modal__message--rejected'
            style={displayRejectedStyle}
          >
            {`${rejectedVal} Rejected!`}
          </p>
          <NextButton />
        </span>
        <br />
        <span className='modal__accept-dismiss-span'>
          <RejectButton />
          <AcceptButton />
        </span>
      </div>
    </>
  )
}
