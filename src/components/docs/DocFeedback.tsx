import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, CheckCircle2 } from 'lucide-react';
import { Button, Typography } from '../ui';
import { useTranslation } from '../../hooks/useTranslation';
import './DocFeedback.css';

export const DocFeedback: React.FC = () => {
  const { t } = useTranslation();
  const [feedbackSent, setFeedbackSent] = useState<boolean>(false);

  return (
    <div className="doc-feedback-wrap">
      {feedbackSent ? (
        <div className="doc-feedback-success">
          <CheckCircle2 size={18} style={{ color: 'var(--color-success)' }} aria-hidden="true" />
          <span>{t('docs.feedbackThanks', 'Thank you for your feedback!')}</span>
        </div>
      ) : (
        <div className="doc-feedback-bar">
          <Typography variant="small" muted className="feedback-label">
            {t('docs.wasHelpful', 'Was this article helpful?')}
          </Typography>
          <div className="feedback-actions">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setFeedbackSent(true)}
              aria-label="Mark article as helpful"
            >
              <ThumbsUp size={16} style={{ marginRight: 4 }} aria-hidden="true" />
              {t('common.yes', 'Yes')}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setFeedbackSent(true)}
              aria-label="Mark article as not helpful"
            >
              <ThumbsDown size={16} style={{ marginRight: 4 }} aria-hidden="true" />
              {t('common.no', 'No')}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
