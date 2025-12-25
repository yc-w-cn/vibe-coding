'use client';

import AppFooter from '@/components/AppFooter';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const cliTools = [
  {
    id: 'claude-kimi',
    name: 'Claude Code + Kimi 2',
    note: '组合使用，国内可用',
  },
  { id: 'gemini-cli', name: 'Gemini CLI', note: '谷歌官方命令行工具' },
  { id: 'qwen-code', name: 'Qwen Code', note: '阿里通义代码工具' },
  { id: 'codex', name: 'Codex', note: '开源/兼容命令行方案' },
];

const vendors = [
  { id: 'siliconflow', name: '硅基流动', note: '国内模型服务商' },
];

export default function CLI() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
            CLI 级别的 vibe-coding
          </h1>
          <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
            命令行工作流与自动化集成，支持替换底层模型
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
            CLI 工具
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cliTools.map((tool) => (
            <Card
              key={tool.id}
              className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-none"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-black dark:text-zinc-50">
                  {tool.name}
                </CardTitle>
                <CardDescription className="text-zinc-600 dark:text-zinc-400">
                  {tool.note}
                </CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          ))}
        </div>

        <div className="mt-10 mb-6">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
            底层模型供应商
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {vendors.map((vendor) => (
            <Card
              key={vendor.id}
              className="border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-none"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-black dark:text-zinc-50">
                  {vendor.name}
                </CardTitle>
                <CardDescription className="text-zinc-600 dark:text-zinc-400">
                  {vendor.note}
                </CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          ))}
        </div>
      </main>
      <AppFooter />
    </div>
  );
}
