import { AITool } from '@/types/ai-tools';

export const kiro: AITool = {
  id: 'kiro',
  name: 'Kiro',
  type: 'IDE',
  plans: [
    {
      name: 'KIRO FREE',
      price: '$0',
      features: ['50 credits'],
    },
    {
      name: 'KIRO PRO',
      price: '$20/月',
      features: ['1,000 credits', 'Pay-per-use overage ($0.04/credit)'],
    },
    {
      name: 'KIRO PRO+',
      price: '$20/月',
      features: ['2,000 credits', 'Pay-per-use overage ($0.04/credit)'],
    },
    {
      name: 'KIRO POWER',
      price: '$200/月',
      features: ['10,000 credits', 'Pay-per-use overage ($0.04/credit)'],
    },
  ],
  source: 'https://kiro.dev/pricing/',
};
