'use client';

import PageLayout from '@/components/page-layout';
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
  { id: 'codex', name: 'Codex', note: 'OpenAI 终端编码代理' },
  { id: 'cursor-cli', name: 'Cursor CLI', note: 'IDE 级代码理解带到终端' },
  { id: 'open-code', name: 'Open Code', note: '终端 AI 助手' },
  { id: 'goose', name: 'Goose', note: '本机运行的 AI 代理' },
  { id: 'crush', name: 'Crush', note: 'Open Code 的精神续作' },
  { id: 'trae-agent', name: 'trae-agent', note: 'Trae AI 代理' },
];

export default function CLI() {
  return (
    <PageLayout>
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
          CLI 级别的 vibe-coding
        </h1>
        <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
          命令行工作流与自动化集成，支持替换底层模型
        </p>
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
    </PageLayout>
  );
}
