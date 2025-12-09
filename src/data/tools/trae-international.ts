import { AITool } from '@/types/ai-tools';

export const traeInternational: AITool = {
  id: 'trae-international',
  name: 'Trae (国际版)',
  type: 'IDE',
  plans: [
    {
      name: '免费版',
      price: '$0',
      features: [
        '10 Fast requests and 50 Slow requests of Premium models / month',
        '1000 Requests of Advanced models / month',
        '5000 Autocomplete / month',
      ],
    },
    {
      name: '专业版',
      price: '$10/月',
      features: [
        '600 Fast requests and unlimited Slow requests of Premium models / month',
        'Unlimited Requests of Advanced models',
        'Unlimited Autocomplete',
      ],
    },
  ],
  source: 'https://www.trae.ai/pricing',
};
