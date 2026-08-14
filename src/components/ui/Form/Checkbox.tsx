import React, { useId } from 'react';
import './Form.css';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: React.ReactNode;
  error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const generatedId = useId();
    const checkboxId = id || generatedId;

    return (
      <div className="form-group" style={{ marginBottom: 'var(--space-2)' }}>
        <label htmlFor={checkboxId} className="form-choice">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            className={`form-choice__input ${className}`}
            {...props}
          />
          <span className="form-choice__label">{label}</span>
        </label>
        {error && <span className="form-error-message">{error}</span>}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
