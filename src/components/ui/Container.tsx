import React from 'react';
import './Container.css';

interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  size = 'lg',
  children,
  className = '',
}) => {
  return (
    <div className={`container container--${size} ${className}`}>
      {children}
    </div>
  );
};
