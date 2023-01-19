import React from 'react';
import css from './Score.module.scss';
import { useAppSelector } from '../../../hooks/redux';
import ScoreItem from '../ScoreItem/ScoreItem';

const Score: React.FC = () => {
  const { currentLevel, questions } = useAppSelector((state) => state.game);
  return (
    <div className={css.wrapper}>
      {questions.map((question, index) => (
        <ScoreItem
          index={index}
          award={question?.award}
          key={question.id}
          currentLevel={currentLevel}
        />
      ))}
    </div>
  );
};

export default Score;
