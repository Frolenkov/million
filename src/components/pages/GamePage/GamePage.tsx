import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import AnswerButton from '../../common/AnswerButton/AnswerButton';
import { IAnswer } from '../../../models';
import { moveToNextLevel } from '../../../store/reducers/gameSlice';
import css from './GamePage.module.scss';
import Container from '../../common/Container/Container';
import Score from '../../common/Score/Score';
import BurgerMenu from '../../common/BurgerMenu/BurgerMenu';

const GamePage: React.FC = () => {
  const { currentLevel, questions } = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();
  const currentQuestion = questions[currentLevel];
  const targetAnswers = currentQuestion?.answers?.filter(item => item.isCorrect);
  const navigate = useNavigate();
  const [scoreOpen, setScoreOpen] = useState(false);
  const [answers, setAnswers] = useState<IAnswer[]>([]);

  const selectAnswer = (answer: IAnswer) => {
    if (answer.isCorrect) {
      const newAnswers = [...answers, answer];
      console.log(newAnswers.length, targetAnswers.length);
      if (newAnswers.length === targetAnswers.length) {
        setAnswers([]);
        if (currentLevel === questions.length - 1) {
          navigate('/');
          return;
        }
        dispatch(moveToNextLevel());
        return;
      } else
      setAnswers(newAnswers);
      return;
    }
  navigate('/');
  };

  return (
    <div className={css.pageWrapper}>
      <Container>
        <div className={css.main}>
          <BurgerMenu className={css.toggler} onClick={() => setScoreOpen(!scoreOpen)} />
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
          <Score className={classNames(css.sideBar, { [css.open]: scoreOpen })} />
        </div>
      </Container>
    </div>
  );
};

export default GamePage;
