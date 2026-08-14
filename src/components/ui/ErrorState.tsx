import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Typography } from './Typography';
import { Button } from './Button';
import { useTranslation } from '../../hooks/useTranslation';
import './ErrorState.css';

export interface ErrorStateProps {
  title?: string;
  message?: string;
  retryLabel?: string;
  onRetry?: () => void;
  className?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title,
  message,
  retryLabel,
  onRetry,
  className = '',
}) => {
  const { t } = useTranslation();

  const finalTitle = title || t('error.title', 'Something went wrong.');
  const finalMessage = message || t('error.message', 'Please try again or contact support if the problem persists.');
  const finalRetryLabel = retryLabel || t('error.retry', 'Try Again');

  return (
    <div className={`error-state ${className}`} role="alert">
      <div className="error-state__icon">
        <AlertCircle size={44} aria-hidden="true" />
      </div>
      <Typography variant="h3" className="error-state__title">
        {finalTitle}
      </Typography>
      <Typography variant="body" muted className="error-state__desc">
        {finalMessage}
      </Typography>
      {onRetry && (
        <Button variant="primary" onClick={onRetry} className="error-state__action">
          {finalRetryLabel}
        </Button>
      )}
    </div>
  );
};
