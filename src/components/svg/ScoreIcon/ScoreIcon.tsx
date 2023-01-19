import classnames from 'classnames';
import css from './ScoreIcon.module.scss';

interface ScoreIconProps {
  className?: string,
}

const ScoreIcon: React.FC<ScoreIconProps> = ({ className }) => {
  const classes = classnames(css.root, className);

  return (
    <svg
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
      width="376"
      height="40"
      fill="none"
      viewBox="0 0 376 40"
    >
      <path
        d="M69 20H0M376 20h-69"
      />
      <path
        d="M81.453 4.638A11.5 11.5 0 0190.287.5h195.426c3.413 0 6.649 1.516 8.834 4.138L307.349 20l-12.802 15.362a11.499 11.499 0 01-8.834 4.138H90.287a11.5 11.5 0 01-8.834-4.138L68.65 20 81.453 4.638z"
      />
    </svg>
  );
};

export default ScoreIcon;
