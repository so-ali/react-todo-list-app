import type React from 'react';

export type IButtonVariants = 'primary' | 'normal' | 'outlined' | 'transparent';

export type IButtonProps = {
  children?: React.ReactNode;
  variant?: IButtonVariants;
  size?: 'small' | 'normal';
  loading?: boolean;
  error?: boolean;
};
