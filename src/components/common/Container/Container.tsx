import React from 'react';
import css from './Container.module.scss';

interface ButtonProps {
  children: React.ReactNode,
}

const Container: React.FC<ButtonProps> = ({ children }) => (
  <div className={css.container}>{children}</div>
);

export default Container;
