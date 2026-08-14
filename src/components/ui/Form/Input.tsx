import React, { useId } from 'react';
import './Form.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, error, required, className = '', id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const helperId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;

    const ariaDescribedBy = [
      error ? errorId : null,
      helperText ? helperId : null,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className="form-group">
        {label && (
          <label
            htmlFor={inputId}
            className={`form-label ${required ? 'form-label--required' : ''}`}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`form-control ${error ? 'form-control--error' : ''} ${className}`}
          aria-invalid={!!error}
          aria-describedby={ariaDescribedBy || undefined}
          required={required}
          {...props}
        />
        {error && (
          <span id={errorId} className="form-error-message" role="alert">
            {error}
          </span>
        )}
        {!error && helperText && (
          <span id={helperId} className="form-helper-text">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
