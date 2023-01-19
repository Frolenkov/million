import React from 'react';
import classnames from 'classnames';
import css from './Score.module.scss';
import { useAppSelector } from '../../../hooks/redux';
import ScoreItem from '../ScoreItem/ScoreItem';

interface ScoreProps {
  className: string
}

const Score: React.FC<ScoreProps> = ({ className }) => {
  const { currentLevel, questions } = useAppSelector((state) => state.game);
  const classes = classnames(className, css.root);

  return (
    <div className={classes}>
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
