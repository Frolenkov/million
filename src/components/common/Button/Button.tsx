import classnames from 'classnames';
import css from './Button.module.scss';

interface ButtonProps {
  className?: string,
  children: React.ReactNode,
  onClick: (e: any) => void
}

const Button: React.FC<ButtonProps> = ({ className, children, onClick }) => {
  const classes = classnames(css.root, className);

  return (
    <div
      className={classes}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
