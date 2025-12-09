export interface AIPlan {
  name: string;
  price: string;
  features: string[];
}

export interface AITool {
  id: string;
  name: string;
  type: 'IDE' | 'CLI';
  plans: AIPlan[];
  source: string;
}
