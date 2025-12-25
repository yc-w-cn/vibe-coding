/* eslint-disable @typescript-eslint/no-deprecated */
'use client';

import Link from 'next/link';

import { Github, Home } from 'lucide-react';

export default function TopHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
            >
              <Home className="h-5 w-5" />
              <span className="text-sm font-medium">首页</span>
            </Link>
          </div>
          <div className="flex items-center">
            <a
              href="https://yc-w-cn.github.io/vibe-coding"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              aria-label="GitHub Repository"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
