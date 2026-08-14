import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/navigation/Header';
import { Footer } from '../components/navigation/Footer';

export const MainLayout: React.FC = () => {
  return (
    <div className="layout-root">
      <Header />
      <div className="layout-main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
