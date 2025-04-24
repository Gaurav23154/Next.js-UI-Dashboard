'use client';

import './globals.css';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import { Topbar } from './components/Topbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // mobile toggle
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // desktop collapse

  return (
    <html lang="en">
      <body className="flex bg-gray-50">
        {/* Sidebar with both mobile and desktop controls */}
        <Sidebar
          isOpen={isSidebarOpen}
          isCollapsed={isSidebarCollapsed}
          onClose={() => setIsSidebarOpen(false)}
          toggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />

        {/* Mobile backdrop with blur */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-white/30 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${isSidebarCollapsed ? 'lg:ml-10' : 'lg:ml-10'}`}>
          <Topbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
          <div className="p-6">{children}</div>
        </main>
      </body>
    </html>
  );
}
