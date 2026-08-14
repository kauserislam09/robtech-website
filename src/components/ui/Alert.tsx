import React from 'react';
import { Info, CheckCircle2, AlertTriangle, AlertCircle, X } from 'lucide-react';
import './Alert.css';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  children,
  onClose,
  className = '',
}) => {
  const iconMap: Record<AlertVariant, React.ReactNode> = {
    info: <Info size={20} aria-hidden="true" />,
    success: <CheckCircle2 size={20} aria-hidden="true" />,
    warning: <AlertTriangle size={20} aria-hidden="true" />,
    error: <AlertCircle size={20} aria-hidden="true" />,
  };

  const role = variant === 'error' || variant === 'warning' ? 'alert' : 'status';

  return (
    <div className={`alert alert--${variant} ${className}`} role={role}>
      <div className="alert__icon">{iconMap[variant]}</div>
      <div className="alert__content">
        {title && <h4 className="alert__title">{title}</h4>}
        <div className="alert__message">{children}</div>
      </div>
      {onClose && (
        <button
          type="button"
          className="alert__close-btn"
          onClick={onClose}
          aria-label="Dismiss alert"
        >
          <X size={16} aria-hidden="true" />
        </button>
      )}
    </div>
  );
};
