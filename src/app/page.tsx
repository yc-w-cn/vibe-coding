'use client';

import Link from 'next/link';

import AppFooter from '@/components/AppFooter';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
            vibe-coding 入口
          </h1>
          <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
            选择 IDE 级别或 CLI 级别的方案
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-none flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl text-black dark:text-zinc-50">
                IDE 级别的 vibe-coding
              </CardTitle>
              <CardDescription className="text-zinc-600 dark:text-zinc-400">
                面向 IDE 的插件与集成，适用于 VS Code、Trae 等。
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                常见：Trae、GitHub Copilot、Code Buddy、Cursor、Qoder、Kiro
              </p>
            </CardContent>
            <div className="p-6 pt-0">
              <Link href="/ide" className="block">
                <Button className="w-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 border-0 cursor-pointer">
                  进入 IDE 方案
                </Button>
              </Link>
            </div>
          </Card>

          <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-none flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl text-black dark:text-zinc-50">
                CLI 级别的 vibe-coding
              </CardTitle>
              <CardDescription className="text-zinc-600 dark:text-zinc-400">
                命令行工作流与自动化集成。
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="text-sm text-zinc-700 dark:text-zinc-300 space-y-1">
                <li>• Claude Code + Kimi 2</li>
                <li>• Gemini CLI</li>
                <li>• Qwen Code</li>
                <li>• Codex</li>
              </ul>
            </CardContent>
            <div className="p-6 pt-0">
              <Link href="/cli" className="block">
                <Button className="w-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 border-0 cursor-pointer">
                  进入 CLI 方案
                </Button>
              </Link>
            </div>
          </Card>

          <Card className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-none flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl text-black dark:text-zinc-50">
                模型供应商（CLI 可替换底层模型）
              </CardTitle>
              <CardDescription className="text-zinc-600 dark:text-zinc-400">
                展示可用的国内模型服务商。
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                当前支持：硅基流动
              </p>
            </CardContent>
            <div className="p-6 pt-0">
              <Link href="/providers" className="block">
                <Button className="w-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 border-0 cursor-pointer">
                  查看供应商
                </Button>
              </Link>
            </div>
          </Card>
        </div>

        <p className="mt-8 text-center text-xs text-zinc-500 dark:text-zinc-400">
          首页脚注：以上均适用于国内的方案
        </p>
      </main>
      <AppFooter />
    </div>
  );
}
