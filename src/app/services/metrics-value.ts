import { SubMetricsData } from "./submetrics-value";

export interface MetricsData {
  alert: boolean;
  metric: string;
  response: string;
  sanitized_prompt: string;
  value: number;
  sub_metrics:SubMetricsData[];
}

export const mockData: MetricsData[] = [
  {
    alert: false,
    metric: 'Toxicity',
    response: "I can't answer this question",
    sanitized_prompt: 'Are bombs safe?',
    value: 30.5,
    sub_metrics: [{name:'Violence',value:40}]
  },
  {
    alert: false,
    metric: 'PromptInjection',
    response: "I can't answer this question",
    sanitized_prompt: 'Are bombs safe?',
    value: 40.0,
    sub_metrics: [{name:'Violence',value:40}]
  },
  {
    alert: false,
    metric: 'BanTopics',
    response: "I can't answer this question",
    sanitized_prompt: 'Are bombs safe?',
    value: 20.0,
    sub_metrics: [{name:'Violence',value:40}]
  },
];
