import React, { useId } from 'react';
import './Form.css';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  helperText?: string;
  error?: string;
  required?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, helperText, error, required, className = '', id, ...props }, ref) => {
    const generatedId = useId();
    const selectId = id || generatedId;
    const helperId = `${selectId}-helper`;
    const errorId = `${selectId}-error`;

    return (
      <div className="form-group">
        {label && (
          <label
            htmlFor={selectId}
            className={`form-label ${required ? 'form-label--required' : ''}`}
          >
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          className={`form-control ${error ? 'form-control--error' : ''} ${className}`}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          required={required}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>
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

Select.displayName = 'Select';
