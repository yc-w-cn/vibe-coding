import { AITool } from '@/types/ai-tools';

export const cursor: AITool = {
  id: 'cursor',
  name: 'Cursor',
  type: 'IDE',
  model: '',
  modelCost: '',
  plans: [
    {
      name: '免费版',
      price: '$0',
      features: ['一周试用'],
    },
    {
      name: 'Pro',
      price: '$20/月',
      features: [''],
    },
    {
      name: 'Pro+',
      price: '$60/月',
      features: ['3倍用量'],
    },
    {
      name: 'Ultra',
      price: '$200/月',
      features: ['20倍用量'],
    },
  ],
  source: 'https://cursor.com/cn/pricing',
};
