import React from 'react';
import './Divider.css';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  className = '',
}) => {
  return (
    <hr
      className={`divider divider--${orientation} ${className}`}
      aria-orientation={orientation}
    />
  );
};
