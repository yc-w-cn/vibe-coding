import { AITool } from '@/types/ai-tools';

import { codeBuddyCN } from './tools/code-buddy-cn';
import { codeBuddyInternational } from './tools/code-buddy-international';
import { cursor } from './tools/cursor';
import { githubCopilot } from './tools/github-copilot';
import { qoder } from './tools/qoder';
import { traeCN } from './tools/trae-cn';
import { traeInternational } from './tools/trae-international';

export const aiTools: AITool[] = [
  traeCN,
  traeInternational,
  githubCopilot,
  qoder,
  codeBuddyCN,
  codeBuddyInternational,
  cursor,
];

// 导出单个工具的函数
export function getToolById(id: string): AITool | undefined {
  return aiTools.find((tool) => tool.id === id);
}

// 导出按类型筛选的工具
export function getToolsByType(type: string): AITool[] {
  return aiTools.filter((tool) => tool.type === type);
}
