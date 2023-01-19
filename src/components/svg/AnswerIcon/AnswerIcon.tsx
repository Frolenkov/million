import classnames from 'classnames';
import css from './AnswerIcon.module.scss';

interface AnswerIconProps {
  className?: string,
}

const AnswerIcon: React.FC<AnswerIconProps> = ({ className }) => {
  const classes = classnames(css.root, className);

  return (
    <svg
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
      width="405"
      height="72"
      fill="none"
      viewBox="0 0 405 72"
    >
      <path d="M388 36h17M0 36h17" />
      <path
        d="M38.717 5.283A11.5 11.5 0 0148.052.5h308.896a11.5 11.5 0 019.335 4.783L388.384 36l-22.101 30.717a11.5 11.5 0 01-9.335 4.783H48.052a11.5 11.5 0 01-9.335-4.783L16.616 36 38.717 5.283z"
      />
    </svg>
  );
};

export default AnswerIcon;
