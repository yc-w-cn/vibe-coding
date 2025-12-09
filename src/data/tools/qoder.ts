import { AITool } from '@/types/ai-tools';

export const qoder: AITool = {
  id: 'qoder',
  name: 'Qoder',
  type: 'IDE',
  plans: [
    {
      name: '免费版',
      price: '$0/月',
      features: ['为期 2 周的 Pro 试用及 300 Credits'],
    },
    {
      name: '专业版',
      price: '$10/月',
      features: ['2,000 Credits'],
    },
    {
      name: 'Pro+',
      price: '$30/月',
      features: ['6,000 Credits'],
    },
    {
      name: 'Ultra',
      price: '$100/月',
      features: ['20,000 Credits'],
    },
  ],
  source: 'https://qoder.com/pricing',
};
