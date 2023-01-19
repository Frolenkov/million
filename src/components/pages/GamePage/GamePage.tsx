import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import AnswerButton from '../../common/AnswerButton/AnswerButton';
import { IAnswer } from '../../../models';
import { moveToNextLevel } from '../../../store/reducers/gameSlice';
import css from './GamePage.module.scss';
import Container from '../../common/Container/Container';
import Score from '../../common/Score/Score';

const GamePage: React.FC = () => {
  const { currentLevel, questions } = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();
  const currentQuestion = questions[currentLevel];
  const navigate = useNavigate();

  const selectAnswer = (answer: IAnswer) => {
    if (answer.isCorrect) {
      if (currentLevel === questions.length - 1) {
        navigate('/');
        return;
      }
      dispatch(moveToNextLevel());
      return;
    }
    navigate('/');
  };

  return (
    <div className={css.pageWrapper}>
      <Container>
        <div className={css.main}>
          <div className={css.game}>
            <div className={css.question}>{currentQuestion?.question}</div>
            <div className={css.answers}>
              {
              currentQuestion?.answers.map((answer) => (
                <AnswerButton
                  key={answer.text}
                  className={css.answer}
                  onClick={selectAnswer}
                  answer={answer}
                />
              ))
            }
            </div>
          </div>
          <Score />
        </div>
      </Container>
    </div>
  );
};

export default GamePage;
