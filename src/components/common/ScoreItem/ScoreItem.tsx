import classnames from 'classnames';
import css from './ScoreItem.module.scss';
import { ScoreItemStatus } from '../../../models';
import { addCommaToNumbers } from '../../../helpers';
import ScoreIcon from '../../svg/ScoreIcon/ScoreIcon';

interface ScoreItemProps {
  className?: string,
  index: number,
  award: number,
  currentLevel: number
}

const ScoreItem: React.FC<ScoreItemProps> = ({
  className, index, award, currentLevel,
}) => {
  const status = currentLevel === index
    ? ScoreItemStatus.current
    : currentLevel > index
      ? ScoreItemStatus.prev
      : ScoreItemStatus.next;

  const classes = classnames(css.root, className, css[status]);
  const awardText = addCommaToNumbers(award) || 0;

  return (
    <div
      className={classes}
    >
      <ScoreIcon className={css.svg} />
      <div className={css.textBlock}>
        {awardText}
      </div>
    </div>
  );
};

export default ScoreItem;
