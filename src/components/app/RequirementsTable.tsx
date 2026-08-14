import React from 'react';
import { Card, Typography } from '../ui';
import type { Requirement } from '../../types/product';
import { useTranslation } from '../../hooks/useTranslation';
import './RequirementsTable.css';

interface RequirementsTableProps {
  requirements?: Requirement[];
}

export const RequirementsTable: React.FC<RequirementsTableProps> = ({ requirements }) => {
  const { language } = useTranslation();

  if (!requirements || requirements.length === 0) return null;

  return (
    <section className="app-section">
      <Typography variant="h2" className="app-section__title">
        System Requirements
      </Typography>

      <Card variant="standard" padding="none" className="req-card">
        <table className="req-table">
          <tbody>
            {requirements.map((req, idx) => (
              <tr key={idx} className="req-tr">
                <th scope="row" className="req-th">
                  {req.label[language] || req.label.en}
                </th>
                <td className="req-td">
                  {req.value[language] || req.value.en}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </section>
  );
};
