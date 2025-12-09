export interface AIPlan {
  name: string;
  price: string;
  features: string[];
}

export interface AITool {
  id: string;
  name: string;
  type: 'IDE' | 'CLI';
  model: string;
  modelCost: string;
  plans: AIPlan[];
  source: string;
}
