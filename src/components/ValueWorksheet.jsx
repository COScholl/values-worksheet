import React, { useState, useEffect } from 'react';
import { ValueModal } from './ValueModal';

export const ValueWorksheet = () => {

  const [list, setList] = useState([
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

  /**
   * helper function that advances value from list to display
   * @modifies {valueIdx} calls setValueIdx to mutate valueIdx
   */
  const advanceValue = () => {
    if(valueIdx < list.length - 1) {
      setValueIdx(valueIdx + 1)
    } else {
      setValueIdx(list.length - 1)
    }
  }

  /**
   * helper function that filters value from list
   * New value at valueIdx is displayed
   * @param    {string} listValue - current value of list at valueIdx
   * @modifies {list} calls setList to mutate valueIdx
   */
  const rejectAndAdvanceValue = (listValue) => {
    const returnList = list.filter((elem) => elem !== listValue);

    setList(returnList);
  }

  return (
    <>
      <ValueModal
        list={list}
        valueIdx={valueIdx}
        advanceValue={advanceValue}
        rejectAndAdvanceValue={rejectAndAdvanceValue}
      />
    </>
  );
};
