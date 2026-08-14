import React, { useId } from 'react';
import './Form.css';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: React.ReactNode;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className = '', id, ...props }, ref) => {
    const generatedId = useId();
    const radioId = id || generatedId;

    return (
      <label htmlFor={radioId} className="form-choice">
        <input
          ref={ref}
          type="radio"
          id={radioId}
          className={`form-choice__input ${className}`}
          {...props}
        />
        <span className="form-choice__label">{label}</span>
      </label>
    );
  }
);

Radio.displayName = 'Radio';
