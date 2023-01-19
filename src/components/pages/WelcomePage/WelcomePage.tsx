import { useNavigate } from 'react-router-dom';
import css from './WelcomePage.module.scss';
import hand from '../../../assets/svg/hand.svg';
import Button from '../../common/Button/Button';
import Container from '../../common/Container/Container';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { restartGame } from '../../../store/reducers/gameSlice';
import { addCommaToNumbers } from '../../../helpers';

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { currentLevel, questions } = useAppSelector((state) => state.game);
  const award = addCommaToNumbers(questions[currentLevel]?.award) || 0;

  const handleStart = () => {
    if (currentLevel > 0) dispatch(restartGame());
    navigate('/game');
  };

  const textBlock = currentLevel === 0 ? (
    <div className={css.textBlock}>
      <h1>Who wants to be a millionaire?</h1>
      <Button onClick={handleStart}>Start</Button>
    </div>
  ) : (
    <div className={css.textBlock}>
      <div className={css.total}>Total score:</div>
      <h1>
        {`$ ${award} earned`}
      </h1>
      <Button onClick={handleStart}>Try again</Button>
    </div>

  );

  return (
    <div className={css.pageWrapper}>
      <Container>
        <div className={css.banner}>
          <div className={css.imageBlock}>
            <img src={hand} alt="hand" />
          </div>
          {textBlock}
        </div>
      </Container>
    </div>
  );
};

export default WelcomePage;
