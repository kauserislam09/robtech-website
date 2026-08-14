import React from 'react';
import './Typography.css';

export type TypographyVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body'
  | 'small'
  | 'caption';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  muted?: boolean;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  as,
  children,
  className = '',
  muted = false,
  ...props
}) => {
  const Component = as || defaultElementMap[variant] || 'p';
  const classes = [
    `typography--${variant}`,
    muted ? 'typography--muted' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

const defaultElementMap: Record<TypographyVariant, React.ElementType> = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  small: 'p',
  caption: 'span',
};
