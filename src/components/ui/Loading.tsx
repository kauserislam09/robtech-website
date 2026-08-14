import React from 'react';
import { Loader2 } from 'lucide-react';
import './Loading.css';

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  className = '',
  label = 'Loading...',
}) => {
  const pixelSizes = { sm: 16, md: 24, lg: 36 };

  return (
    <div className={`spinner-wrap spinner--${size} ${className}`} role="status">
      <Loader2 size={pixelSizes[size]} className="spinner-icon" aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </div>
  );
};

export interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '1.25rem',
  borderRadius = 'var(--radius-md)',
  className = '',
}) => {
  return (
    <div
      className={`skeleton ${className}`}
      style={{ width, height, borderRadius }}
      aria-hidden="true"
    />
  );
};

export interface PageLoadingProps {
  message?: string;
}

export const PageLoading: React.FC<PageLoadingProps> = ({
  message = 'Loading RobTech platform...',
}) => {
  return (
    <div className="page-loading" role="status">
      <Spinner size="lg" />
      <p className="page-loading__text">{message}</p>
    </div>
  );
};
