import { AITool } from '@/types/ai-tools';

export const traeCN: AITool = {
  id: 'trae-cn',
  name: 'Trae (国内版)',
  type: 'IDE',
  plans: [
    {
      name: '免费版',
      price: '¥0',
      features: ['SOLO'],
    },
  ],
  source: 'https://www.trae.cn/pricing',
};
