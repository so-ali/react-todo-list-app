import type React from 'react';

export type IButtonProps = {
  children?: React.ReactNode;
  style?: 'primary' | 'normal' | 'outlined' | 'transparent';
  size?: 'small' | 'normal';
};
