import { AITool } from '@/types/ai-tools';

export const githubCopilot: AITool = {
  id: 'github-copilot',
  name: 'GitHub Copilot',
  type: 'IDE',
  plans: [
    {
      name: '免费版',
      price: '$0',
      features: [
        '50 agent mode or chat requests per month',
        '2,000 completions per month',
        'Access to Haiku 4.5, GPT-4.1, and more',
      ],
    },
    {
      name: 'Pro',
      price: '$10/月',
      features: [
        'Coding agent',
        'Unlimited agent mode and chats with GPT-5 mini',
        'Unlimited code completions',
        'Access to code review, Claude Sonnet 4/4.5, GPT-5, Gemini 2.5 Pro, and more',
        '300 premium requests to use latest models, with the option to buy more',
      ],
    },
    {
      name: 'Pro+',
      price: '$39/月',
      features: [
        'Access to all models, including Claude Opus 4.1 and more',
        '5x more premium requests than Pro to use the latest models, with the option to buy more',
        'Up to 375 Spark messages included per month',
        'Codex IDE extension support in VS Code',
      ],
    },
  ],
  source: 'https://github.com/features/copilot/pricing',
};
