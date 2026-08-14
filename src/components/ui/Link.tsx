import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import type { LinkProps as RouterLinkProps } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import './Link.css';

export interface AccessibleLinkProps extends Omit<RouterLinkProps, 'to'> {
  to?: string;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Link: React.FC<AccessibleLinkProps> = ({
  to,
  href,
  external = false,
  children,
  className = '',
  ...props
}) => {
  const isExternal = external || (href && (href.startsWith('http://') || href.startsWith('https://')));
  const classes = `custom-link ${className}`;

  if (isExternal && href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        <span>{children}</span>
        <ExternalLink size={14} className="custom-link__external-icon" aria-hidden="true" />
      </a>
    );
  }

  if (to) {
    return (
      <RouterLink to={to} className={classes} {...props}>
        {children}
      </RouterLink>
    );
  }

  return (
    <a href={href || '#'} className={classes} {...props}>
      {children}
    </a>
  );
};
