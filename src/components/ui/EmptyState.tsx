import React from 'react';
import { Inbox } from 'lucide-react';
import { Typography } from './Typography';
import { Button } from './Button';
import { useTranslation } from '../../hooks/useTranslation';
import './EmptyState.css';

export interface EmptyStateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  actionLabel,
  onAction,
  icon = <Inbox size={44} aria-hidden="true" />,
  className = '',
}) => {
  const { t } = useTranslation();

  const finalTitle = title || t('empty.title', 'Nothing here yet.');
  const finalDescription = description || t('empty.description', 'There are currently no items or updates available.');
  const finalActionLabel = actionLabel || t('empty.action', 'Go Back');

  return (
    <div className={`empty-state ${className}`}>
      <div className="empty-state__icon">{icon}</div>
      <Typography variant="h3" className="empty-state__title">
        {finalTitle}
      </Typography>
      <Typography variant="body" muted className="empty-state__desc">
        {finalDescription}
      </Typography>
      {onAction && (
        <Button variant="secondary" onClick={onAction} className="empty-state__action">
          {finalActionLabel}
        </Button>
      )}
    </div>
  );
};
