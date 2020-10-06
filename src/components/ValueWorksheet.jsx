import React, { useState, useEffect } from 'react';
import { ValueModal } from './ValueModal';

export const ValueWorksheet = () => {

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
  // useState to keep tabs on which item should be rendered at a time
  const [valueIdx, setValueIdx] = useState(0);
  // set accepted and rejected values. Only set the most recent change and reset
  // the other to undefined with a helper function
  const [acceptedVal, setAcceptedVal] = useState('');
  const [rejectedVal, setRejectedVal] = useState('');
  const [displayAcceptedStyle, setDisplayAcceptedStyle] = useState({display: 'none'});
  const [displayRejectedStyle, setDisplayRejectedStyle] = useState({display: 'none'})
  // @TODO: create useEffect to toggle accepted or rejected based on values
  useEffect(() => {
    if(acceptedVal) {
      setDisplayRejectedStyle({display: 'none'});
      setDisplayAcceptedStyle({display: 'unset'});
    }
    if(rejectedVal) {
      setDisplayAcceptedStyle({display: 'none'});
      setDisplayRejectedStyle({display: 'unset'});
    }
  }, [acceptedVal, rejectedVal]);
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

  const acceptAndAdvanceValue = () => {
    advanceValue();
    setRejectedVal('');
    setAcceptedVal(valuesList[valueIdx]);
  };

  /**
   * Helper function that filters value from valuesList
   * New value at valueIdx is displayed
   * @param    {string} listValue - current value of valuesList at valueIdx
   * @modifies {valuesList} calls setValuesList to mutate valueIdx
   */
  const rejectAndAdvanceValue = (listValue, valueIdx) => {
    const valueToReject = listValue;
    const returnList = valuesList.filter((elem) => elem !== listValue);

    setValuesList(returnList);
    setAcceptedVal('');
    setRejectedVal(valueToReject);
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
      />
    </>
  );
};
