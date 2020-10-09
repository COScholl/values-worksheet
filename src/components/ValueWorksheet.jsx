import React, { useState, useEffect } from 'react';
import { ValueModal } from './ValueModal';
import { DragAndDropValues } from './DragAndDropValues';

export const ValueWorksheet = () => {

  // @TODO: load custom list based on user JSON object and have original list
  // available as a reset option
  // work out how user edited values list will be saved and how it differs from
  // the list in drag and drop view (keep track of separate list or object for
  // drang and drop)
  const [valuesList, setValuesList] = useState([
    'Accountability',
    'Accuracy',
    'Achievement',
    'Adventurousness',
    'Altruism',
    'Ambition',
    'Assertiveness',
    'Balance',
    'Being the best',
    'Belonging',
    'Boldness',
    'Calmness',
    'Carefulness',
    'Challenge',
    'Cheerfulness',
    'Clear-mindedness',
    'Commitment',
    'Community',
    'Compassion',
    'Competitiveness',
    'Consistency',
    'Contentment',
    'Continuous Improvement',
    'Contribution',
    'Control',
    'Cooperation',
    'Correctness',
    'Courtesy',
    'Creativity',
    'Curiosity',
    'Decisiveness',
    'Democraticness',
    'Dependability',
    'Determination',
    'Devoutness',
    'Diligence',
    'Discipline',
    'Discretion',
    'Diversity',
    'Dynamism',
    'Economy',
    'Effectiveness',
    'Efficiency',
    'Elegance',
    'Empathy',
    'Enjoyment',
    'Enthusiasm',
    'Equality',
    'Excellence',
    'Excitement',
    'Expertise',
    'Exploration',
    'Expressiveness',
    'Fairness',
    'Faith',
    'Family-orientedness',
    'Fidelity',
    'Fitness',
    'Fluency',
    'Focus',
    'Freedom',
    'Fun',
    'Generosity',
    'Goodness',
    'Grace',
    'Growth',
    'Happiness',
    'Hard Work',
    'Health',
    'Helping Society',
    'Holiness',
    'Honesty',
    'Honor',
    'Humility',
    'Independence',
    'Ingenuity',
    'Inner Harmony',
    'Inquisitiveness',
    'Insightfulness',
    'Intelligence',
    'Intellectual Status',
    'Intuition',
    'Joy',
    'Justice',
    'Leadership',
    'Legacy',
    'Love',
    'Loyalty',
    'Making a difference',
    'Mastery',
    'Merit',
    'Obedience',
    'Openness',
    'Order',
    'Originality',
    'Patriotism',
    'Perfection',
    'Piety',
    'Positivity',
    'Practicality',
    'Preparedness',
    'Professionalism',
    'Prudence',
    'Quality-orientation',
    'Reliability',
    'Resourcefulness',
    'Restraint',
    'Results-oriented',
    'Rigor',
    'Security',
    'Self-actualization',
    'Self-control',
    'Selflessness',
    'Self-reliance',
    'Sensitivity',
    'Serenity',
    'Service',
    'Shrewdness',
    'Simplicity',
    'Soundness',
    'Speed',
    'Spontaneity',
    'Stability',
    'Strategic',
    'Strength',
    'Structure',
    'Success',
    'Support',
    'Teamwork',
    'Temperance',
    'Thankfulness',
    'Thoroughness',
    'Thoughtfulness',
    'Timeliness',
    'Tolerance',
    'Traditionalism',
    'Trustworthiness',
    'Truth-seeking',
    'Understanding',
    'Uniqueness',
    'Unity',
    'Usefulness',
    'Vision',
    'Vitality',
  ]);

  const [viewValueModal, setViewValueModal] = useState(true);
  const [displayValueModal, setDisplayValueModal] = useState({display: 'unset'});
  const [valueIdx, setValueIdx] = useState(0);
  const [acceptedVal, setAcceptedVal] = useState('');
  const [rejectedVal, setRejectedVal] = useState('');
  const [displayAcceptedStyle, setDisplayAcceptedStyle] = useState({display: 'none'});
  const [displayRejectedStyle, setDisplayRejectedStyle] = useState({display: 'none'});
  const [displayAddValuesStyle, setDisplayAddValuesStyle] = useState({display: 'none'});

  /**
   * Toggles CSS display attribute of .modal__value-span--msg-accepted
   * and .modal__value-span--msg-rejected <p> tags when values are accepted
   * Only set the most recent change and reset the other to undefined
   * @modifies {displayAcceptedStyle}    based on acceptedVal
   * @modifies {displayRejectedStyle}    based on rejectedVal
   */
  useEffect(() => {
    if(acceptedVal) {
      setDisplayRejectedStyle({display: 'none'});
      setDisplayAcceptedStyle({display: 'flex'});
    }
    if(rejectedVal) {
      setDisplayAcceptedStyle({display: 'none'});
      setDisplayRejectedStyle({display: 'flex'});
    }
  }, [acceptedVal, rejectedVal]);

  /**
   * Unsets CSS display attribute of .modal__value-span--msg-empty <p> tag from
   * 'none' and sets CSS display attribute of
   * .modal__value-span--msg-accepted and .modal__value-span--msg-rejected <p>
   * tags when there are no more values in valuesList
   * @modifies {displayAddValuesStyle}   based on valuesList.length
   * @modifies {displayAcceptedStyle}    based on valuesList.length
   * @modifies {displayRejectedStyle}    based on valuesList.length
   */
  useEffect(() => {
    if(!valuesList.length) {
      setDisplayAcceptedStyle({display: 'none'});
      setDisplayRejectedStyle({display: 'none'});
      setDisplayAddValuesStyle({display: 'flex'});
    }
  }, [valuesList]);

  /**
   * Sets display attribute of .modal__wrapper when toggleViewValueModal()
   * sets viewValueModal
   * @modifies {displayValueModal}    based on viewValueModal
   */
  useEffect(() => {
      if(viewValueModal) setDisplayValueModal({display: 'unset'});
      if(!viewValueModal) setDisplayValueModal({display: 'none'});
  }, [viewValueModal]);

  /**
   * Helper function that advances value from valuesList to display
   * @modifies {valueIdx} calls setValueIdx to mutate valueIdx
   */
  const advanceValue = () => {
    if(valueIdx < valuesList.length - 1) {
      setValueIdx(valueIdx + 1)
    } else {
      // already at end of list
      return;
    }
  }

  /**
   * Helper function that regresses value from valueList to display
   * @modifies {valueIdx} calls setValueIdx to mutate valueIdx
   */
  const regressValue = () => {
    if(valueIdx > 0) {
      setValueIdx(valueIdx - 1)
    } else {
      // already at beginning of list
      return;
    }
  }

  /**
   * Helper function that calls advanceValue() and sets acceptedValue
   * as well as resetting rejectedValue;
   * @modifies {valueIdx} calls advanceValue() which calls setValueIdx
   * @modifies {rejectedValue}
   * @modifies {acceptedValue}
   */
  const acceptAndAdvanceValue = () => {
    advanceValue();
    setRejectedVal('');
    setAcceptedVal(valuesList[valueIdx]);
  };

  /**
   * Helper function that filters value from valuesList
   * New value at valueIdx is displayed
   * @param    {string} listValue - current value of valuesList at valueIdx
   * @modifies {valueIdx}  only when rejected val is last in list and prev val
   * @modifies {valuesList} calls setValuesList to mutate valueIdx
   * @modifies {rejectedValue}
   * @modifies {acceptedValue}
   */
  const rejectAndAdvanceValue = (listValue) => {
    const valueToReject = listValue;
    const numValues = valuesList.length;
    const returnList = valuesList.filter((elem) => elem !== listValue);
    // set valueIdx to previous if valueToReject is last in valuesList
    if(listValue === valuesList[numValues - 1] && numValues > 1) setValueIdx(valueIdx - 1);
    setValuesList(returnList);
    setAcceptedVal('');
    setRejectedVal(valueToReject);
  }

  /**
   * Changes bool newValueModal for useEffect to set whether or not ValueModal
   * is displayed
   * @modifies {viewValueModal}
   */
  const toggleViewValueModal = () => {
    setViewValueModal(!viewValueModal)
  }

  /**
   * Close modal and enter drag and drop view in "add values" mode
   * @todo write function after implementing drag and drop mode and add values functionality
   * @return {[type]} [description]
   */
  const toggleAddValuesFromModal = () => {
    alert('functionality not yet implemented!');
    return;
  }

  return (
    <>
      <ValueModal
        valuesList={valuesList}
        valueIdx={valueIdx}
        acceptedVal={acceptedVal}
        rejectedVal={rejectedVal}
        advanceValue={advanceValue}
        regressValue={regressValue}
        acceptAndAdvanceValue={acceptAndAdvanceValue}
        rejectAndAdvanceValue={rejectAndAdvanceValue}
        displayAcceptedStyle={displayAcceptedStyle}
        displayRejectedStyle={displayRejectedStyle}
        displayAddValuesStyle={displayAddValuesStyle}
        toggleAddValuesFromModal={toggleAddValuesFromModal}
        toggleViewValueModal={toggleViewValueModal}
        displayValueModal={displayValueModal}
      />
      <DragAndDropValues
        valuesList={valuesList}
        setValuesList={setValuesList}
      />
    </>
  );
};
