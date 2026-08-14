import React from 'react';
import { Check, Sparkles, AlertCircle, Smartphone, Globe } from 'lucide-react';
import './Badge.css';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral';

export type BadgePreset =
  | 'stable'
  | 'beta'
  | 'development'
  | 'archived'
  | 'android'
  | 'web'
  | 'new'
  | 'updated';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  preset?: BadgePreset;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Badge: React.FC<BadgeProps> = ({
  variant,
  preset,
  children,
  className = '',
  style,
  ...props
}) => {
  let finalVariant: BadgeVariant = variant || 'neutral';
  let icon: React.ReactNode = null;
  let labelText: React.ReactNode = children;

  if (preset) {
    switch (preset) {
      case 'stable':
        finalVariant = variant || 'success';
        icon = <Check size={12} aria-hidden="true" />;
        labelText = children || '✓ Stable';
        break;
      case 'beta':
        finalVariant = variant || 'warning';
        labelText = children || 'Beta';
        break;
      case 'development':
        finalVariant = variant || 'info';
        icon = <AlertCircle size={12} aria-hidden="true" />;
        labelText = children || 'Development';
        break;
      case 'archived':
        finalVariant = variant || 'neutral';
        labelText = children || 'Archived';
        break;
      case 'android':
        finalVariant = variant || 'primary';
        icon = <Smartphone size={12} aria-hidden="true" />;
        labelText = children || 'Android';
        break;
      case 'web':
        finalVariant = variant || 'info';
        icon = <Globe size={12} aria-hidden="true" />;
        labelText = children || 'Web';
        break;
      case 'new':
        finalVariant = variant || 'success';
        icon = <Sparkles size={12} aria-hidden="true" />;
        labelText = children || 'New';
        break;
      case 'updated':
        finalVariant = variant || 'info';
        labelText = children || 'Updated';
        break;
    }
  }

  return (
    <span className={`badge badge--${finalVariant} ${className}`} style={style} {...props}>
      {icon && <span className="badge__icon">{icon}</span>}
      <span className="badge__text">{labelText}</span>
    </span>
  );
};
