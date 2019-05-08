import * as React from 'react';
import styles from './Button.scss';
import classnames from 'classnames';

type JSXButtonProps = JSX.IntrinsicElements['button'];

export interface ButtonProps extends JSXButtonProps {}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...restProps
}) => {
  return (
    <button className={classnames(styles.button, className)} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
