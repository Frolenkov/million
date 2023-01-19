import { useState } from 'react';
import classnames from 'classnames';
import AnswerIcon from '../../svg/AnswerIcon/AnswerIcon';
import css from './AnswerButton.module.scss';
import { AnswerButtonStatus, IAnswer } from '../../../models';
import { TIME_OUT } from '../../../constanst';
import { timer } from '../../../helpers';

interface AnswerButtonProps {
  className?: string,
  answer: IAnswer,
  onClick: (e: any) => void
}

const AnswerButton: React.FC<AnswerButtonProps> = ({ className, answer, onClick }) => {
  const [status, setStatus] = useState(AnswerButtonStatus.inactive);

  const classes = classnames(css.root, className, css[status]);

  const clickHandler = async () => {
    setStatus(AnswerButtonStatus.selected);
    await timer(TIME_OUT);
    if (answer.isCorrect) {
      setStatus(AnswerButtonStatus.correct);
    } else {
      setStatus(AnswerButtonStatus.wrong);
    }
    await timer(TIME_OUT);
    onClick(answer);
  };

  return (
    <div
      className={classes}
      onClick={clickHandler}
    >
      <AnswerIcon className={css.svg} />
      <div className={css.textBlock}>
        <div className={css.figure}>
          {answer.figure}
        </div>
        <div className={css.text}>
          {answer.text}
        </div>
      </div>
    </div>
  );
};

export default AnswerButton;
