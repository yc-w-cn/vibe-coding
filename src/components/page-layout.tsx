'use client';

import AppFooter from '@/components/app-footer';
import TopHeader from '@/components/top-header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-black font-sans">
      <TopHeader />
      <main className="flex-1 w-full max-w-5xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <AppFooter />
    </div>
  );
}
