import React, { useId } from 'react';
import './Form.css';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, helperText, error, required, className = '', id, ...props }, ref) => {
    const generatedId = useId();
    const textareaId = id || generatedId;
    const helperId = `${textareaId}-helper`;
    const errorId = `${textareaId}-error`;

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
            htmlFor={textareaId}
            className={`form-label ${required ? 'form-label--required' : ''}`}
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
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

Textarea.displayName = 'Textarea';
