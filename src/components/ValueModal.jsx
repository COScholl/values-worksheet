import React from 'react';
import '../assets/css/valueModal.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const ValueModal = (props) => {
  const {
    displayValueModal,
    toggleViewValueModal,
    toggleAddValuesFromModal,
    displayAddValuesStyle,
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
      className='modal__value-span--prev modal__btn'
      onClick={regressValue}
      disabled={!valuesList.length || valueIdx === 0}
    >
      <FaChevronLeft />
    </button>
  );

  /**
   * Button component that advances value on display from props.valuesList
   * Functionally the same as AcceptButton with different class
   * Calls helper function advanceValue()
   */
  const NextButton = () => (
    <button
      className='modal__value-span--next modal__btn'
      onClick={advanceValue}
      disabled={!valuesList.length || valueIdx === valuesList.length - 1}
    >
      <FaChevronRight />
    </button>
  );

  /**
   * Button component that advances value on display from props.valuesList
   * Calls helper function acceptAndAdvanceValue()
   */
  const AcceptButton = () => (
    <button
      className='modal__accept-dismiss-span--accept modal__btn'
      onClick={acceptAndAdvanceValue}
      disabled={
        !valuesList.length || valuesList[valueIdx] === acceptedVal
      }
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
      className='modal__accept-dismiss-span--reject modal__btn'
      onClick={() => rejectAndAdvanceValue(testValue)}
      disabled={!valuesList.length || !valuesList[valueIdx]}
    >
      Reject
    </button>
  );

  // @TODO: @XXX implement drag and drop mode and then add this functionality
  // when a user rejects all values in the list or reaches the end of the list
  /**
   * Button component that switches view from modal to drag and drop view in
   * "add values" mode
   */
  const AddValuesButton = () => (
    <button
      onClick={toggleAddValuesFromModal}
      style={{
        background: 'none',
        color: 'blue',
        border: 'none',
        padding: '0',
        font: 'inherit',
        cursor: 'pointer',
        outline: 'inherit',
      }}
    >
      add
    </button>
  );

  return (
    // add overlay under modal but covering drag and drop element so as to prevent interaction with
    // drag and drop while modal is open
    <>
      <div
        className='modal'
        style={{...displayValueModal}}
      >
        <div className='modal__header'>
          <h2>Select Your Values</h2>
        </div>
        <form className='modal__form'>
          <span className='modal__value-span'>
            <PreviousButton />
            <div className='modal__value-span--msg-wrapper'>
              <h3 className='modal__value-span--msg-header'>{valuesList[valueIdx]}</h3>
              <p
                className='modal__value-span--msg-accepted'
                style={{...displayAcceptedStyle}}
              >
                {`${acceptedVal} Accepted!`}
              </p>
              <p
                className='modal__value-span--msg-rejected'
                style={{...displayRejectedStyle}}
              >
                {`${rejectedVal} Rejected!`}
              </p>
              <p
                className='modal__value-span--msg-empty'
                style={{...displayAddValuesStyle}}
              >
                There are no more values in the list, why not {<AddValuesButton />} some values of your own?
              </p>
            </div>
            <NextButton />
          </span>
          <span className='modal__accept-dismiss-span'>
            <RejectButton />
            <AcceptButton />
          </span>
        </form>
        <div className='modal__footer'>
          <button className='modal__footer--close modal__btn'onClick={toggleViewValueModal}>Close</button>
        </div>
      </div>
        <button
          style={{display: displayValueModal.display === 'none' ? 'unset' : 'none'}}
          onClick={toggleViewValueModal}>Open Value Modal</button>
      <div>
      </div>
    </>
  )
}
