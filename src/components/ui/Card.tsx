import React from 'react';
import './Card.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'standard' | 'default' | 'interactive' | 'featured' | 'compact' | 'bordered';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  as?: React.ElementType;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'standard',
  padding = 'md',
  className = '',
  onClick,
  as: Component = 'div',
  style,
  ...props
}) => {
  const normalizedVariant = variant === 'default' ? 'standard' : variant;
  const isInteractive = normalizedVariant === 'interactive' || !!onClick;
  const classes = [
    'card',
    `card--${normalizedVariant}`,
    `card--padding-${padding}`,
    isInteractive ? 'card--interactive' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component
      className={classes}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
};
