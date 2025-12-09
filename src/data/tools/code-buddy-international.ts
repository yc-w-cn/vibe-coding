import { AITool } from '@/types/ai-tools';

export const codeBuddyInternational: AITool = {
  id: 'code-buddy-international',
  name: 'Code Buddy (国际版)',
  type: 'IDE',
  plans: [
    {
      name: '免费版',
      price: '$0',
      features: ['2周专业版试用，包含250积分', '所有高级模型'],
    },
    {
      name: '专业版',
      price: '$9.95/月（原价 $19.90/月）', // $119.40 / 年（原价 $238.80/年）
      features: ['1000积分/月', '所有高级模型'],
    },
    {
      name: '企业版',
      price: '$29/月/用户',
      features: ['无限tokens', '企业级安全', '团队管理', '专属支持'],
    },
    {
      name: '流量包',
      price: '$9.95/月（原价 $19.90/月）',
      features: ['1000积分/月', '1个月内有效'],
    },
  ],
  source: 'https://www.codebuddy.ai/pricing',
};
