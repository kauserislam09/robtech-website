import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Typography, IconButton } from '../ui';
import type { Screenshot } from '../../types/product';
import { useTranslation } from '../../hooks/useTranslation';
import './ScreenshotGallery.css';

interface ScreenshotGalleryProps {
  screenshots?: Screenshot[];
}

export const ScreenshotGallery: React.FC<ScreenshotGalleryProps> = ({ screenshots }) => {
  const { language } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex === null) return;

    document.body.classList.add('body--locked');

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : (screenshots?.length || 1) - 1));
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev !== null && prev < (screenshots?.length || 1) - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('body--locked');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex, screenshots]);

  if (!screenshots || screenshots.length === 0) return null;

  const currentScreenshot = selectedIndex !== null ? screenshots[selectedIndex] : null;

  return (
    <section className="app-section">
      <Typography variant="h2" className="app-section__title">
        Screenshots
      </Typography>

      <div className="screenshot-grid">
        {screenshots.map((shot, idx) => (
          <button
            key={shot.id}
            type="button"
            className="screenshot-thumb-btn"
            onClick={() => setSelectedIndex(idx)}
            aria-label={`Enlarge screenshot ${idx + 1}: ${shot.alt[language] || shot.alt.en}`}
          >
            <img
              src={shot.src}
              alt={shot.alt[language] || shot.alt.en}
              loading="lazy"
              className="screenshot-thumb"
            />
            <div className="screenshot-thumb-overlay">
              <ZoomIn size={24} aria-hidden="true" />
            </div>
            {shot.caption && (
              <span className="screenshot-caption">
                {shot.caption[language] || shot.caption.en}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Accessible Lightbox Modal */}
      {selectedIndex !== null && currentScreenshot && createPortal(
        <div className="lightbox-backdrop" onClick={() => setSelectedIndex(null)} aria-hidden="true">
          <div
            className="lightbox-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Screenshot Preview"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-header">
              <span className="lightbox-counter">
                {selectedIndex + 1} / {screenshots.length}
              </span>
              <IconButton
                aria-label="Close screenshot preview"
                variant="ghost"
                size="md"
                onClick={() => setSelectedIndex(null)}
              >
                <X size={24} aria-hidden="true" />
              </IconButton>
            </div>

            <div className="lightbox-body">
              <IconButton
                className="lightbox-nav-btn prev"
                aria-label="Previous screenshot"
                variant="secondary"
                size="lg"
                onClick={() => setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : screenshots.length - 1))}
              >
                <ChevronLeft size={28} aria-hidden="true" />
              </IconButton>

              <img
                src={currentScreenshot.src}
                alt={currentScreenshot.alt[language] || currentScreenshot.alt.en}
                className="lightbox-img"
              />

              <IconButton
                className="lightbox-nav-btn next"
                aria-label="Next screenshot"
                variant="secondary"
                size="lg"
                onClick={() => setSelectedIndex((prev) => (prev !== null && prev < screenshots.length - 1 ? prev + 1 : 0))}
              >
                <ChevronRight size={28} aria-hidden="true" />
              </IconButton>
            </div>

            {currentScreenshot.caption && (
              <div className="lightbox-footer">
                <p>{currentScreenshot.caption[language] || currentScreenshot.caption.en}</p>
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};
