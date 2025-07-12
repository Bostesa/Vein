import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import Sidebar from './components/navigation/Sidebar';
import CashOutModal from './components/ui/CashOutModal';
import DashboardPage from './pages/DashboardPage';
import SecurityPage from './pages/SecurityPage';
import AuditPage from './pages/AuditPage';
import SettingsPage from './pages/SettingsPage';
import AgentStorePage from './pages/AgentStorePage';
import Header from './components/layout/Header';

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isCashOutModalOpen, setIsCashOutModalOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'security': return <SecurityPage />;
      case 'audit': return <AuditPage />;
      case 'settings': return <SettingsPage />;
      case 'agent-store': return <AgentStorePage />;
      default: return <DashboardPage />;
    }
  };

  return (
    <div className="h-screen w-screen bg-base-dark text-text-primary font-sans antialiased flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          onCashOutClick={() => setIsCashOutModalOpen(true)}
        />
        <main className="flex-1 p-8 overflow-y-auto">
          {renderPage()}
        </main>
      </div>
      
      {/* Global components */}
      <Toaster 
        position="bottom-right" 
        toastOptions={{ style: { background: '#111', color: '#fff', border: '1px solid #333' } }} 
      />
      <CashOutModal 
        isOpen={isCashOutModalOpen} 
        onClose={() => setIsCashOutModalOpen(false)} 
      />
    </div>
  );
}