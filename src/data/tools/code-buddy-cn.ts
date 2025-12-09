import { AITool } from '@/types/ai-tools';

export const codeBuddyCN: AITool = {
  id: 'code-buddy-cn',
  name: 'Code Buddy (国内版)',
  type: 'IDE',
  plans: [
    {
      name: '个人免费版',
      price: '¥0',
      features: ['每月 2000 Credits'],
    },
    {
      name: '企业旗舰版',
      price: '¥78/月',
      features: ['每月 2000 Credits'],
    },
    {
      name: '企业专享版',
      price: '¥158/月/用户',
      features: ['每月 2000 Credits'],
    },
  ],
  source: 'https://copilot.tencent.com/pricing/',
};
