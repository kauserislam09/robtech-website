import React from 'react';
import { Info, Sparkles, AlertTriangle, AlertCircle } from 'lucide-react';
import type { DocCalloutType } from '../../types/docs';
import './DocCallout.css';

interface DocCalloutProps {
  type?: DocCalloutType;
  title?: string;
  children: React.ReactNode;
}

export const DocCallout: React.FC<DocCalloutProps> = ({
  type = 'note',
  title,
  children,
}) => {
  const getCalloutIcon = () => {
    switch (type) {
      case 'tip': return <Sparkles size={20} aria-hidden="true" />;
      case 'warning': return <AlertTriangle size={20} aria-hidden="true" />;
      case 'important': return <AlertCircle size={20} aria-hidden="true" />;
      case 'note':
      default:
        return <Info size={20} aria-hidden="true" />;
    }
  };

  const getDefaultTitle = () => {
    switch (type) {
      case 'tip': return 'Tip';
      case 'warning': return 'Warning';
      case 'important': return 'Important';
      case 'note':
      default:
        return 'Note';
    }
  };

  return (
    <div className={`doc-callout doc-callout--${type}`} role="note">
      <div className="doc-callout__icon">{getCalloutIcon()}</div>
      <div className="doc-callout__content">
        <span className="doc-callout__title">{title || getDefaultTitle()}</span>
        <div className="doc-callout__body">{children}</div>
      </div>
    </div>
  );
};
