import classnames from 'classnames';
import css from './BurgerMenu.module.scss';

interface BurgerMenuProps {
  className?: string,
  onClick: (e: any) => void
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ className, onClick }) => {
  const classes = classnames(css.root, className);

  return (
    <div className={classes} onClick={onClick}>
      <input type="checkbox" />
      <span />
      <span />
      <span />
    </div>
  );
};

export default BurgerMenu;
