import React from 'react';
import { Container } from '../components/ui';
import './PageContainer.css';

interface PageContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  size = 'lg',
  className = '',
}) => {
  return (
    <main className={`page-container ${className}`}>
      <Container size={size}>{children}</Container>
    </main>
  );
};
