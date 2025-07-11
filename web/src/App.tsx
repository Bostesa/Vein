import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import { Sidebar } from './components/navigation/Sidebar';
import { CashOutModal } from './components/ui/CashOutModal';

import DashboardPage from './pages/DashboardPage';
import SecurityPage from './pages/SecurityPage';
import AuditPage from './pages/AuditPage';
import SettingsPage from './pages/SettingsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isCashOutModalOpen, setIsCashOutModalOpen] = useState(false);

  // Simple router logic to render the correct page
  const renderPage = () => {
    switch (currentPage) {
      case 'security':
        return <SecurityPage />;
      case 'audit':
        return <AuditPage />;
      case 'settings':
        return <SettingsPage />;
      case 'dashboard':
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans antialiased flex">
      {/* Global toast notifications provider */}
      <Toaster 
        position="bottom-right" 
        toastOptions={{ 
          style: { 
            background: '#111', 
            color: '#fff', 
            border: '1px solid #333' 
          } 
        }} 
      />
      
      {/* Global cash-out modal */}
      <CashOutModal 
        isOpen={isCashOutModalOpen} 
        onClose={() => setIsCashOutModalOpen(false)} 
      />

      {/* Main navigation sidebar */}
      <Sidebar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        onCashOutClick={() => setIsCashOutModalOpen(true)}
      />

      {/* Main content area that changes based on the current page */}
      <main className="flex-1 p-8 overflow-y-auto">
        {renderPage()}
      </main>
    </div>
  );
}
