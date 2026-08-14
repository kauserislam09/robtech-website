import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { IconButton } from './IconButton';
import { Typography } from './Typography';
import './Modal.css';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  ariaDescribedBy?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  ariaDescribedBy,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const titleId = 'modal-title-id';

  // Handle Escape key and body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add('body--locked');

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Focus initial element
    setTimeout(() => {
      modalRef.current?.focus();
    }, 50);

    return () => {
      document.body.classList.remove('body--locked');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="modal-backdrop" onClick={onClose} aria-hidden="true">
      <div
        ref={modalRef}
        className={`modal-container modal--${size}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={ariaDescribedBy}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <Typography id={titleId} variant="h3" className="modal-title">
            {title}
          </Typography>
          <IconButton
            aria-label="Close dialog"
            variant="ghost"
            size="sm"
            onClick={onClose}
          >
            <X size={20} aria-hidden="true" />
          </IconButton>
        </div>

        <div className="modal-body">{children}</div>

        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>,
    document.body
  );
};
