export interface MetricsData{
    alert:boolean;
    name:string;
    response:string;
    sanitized_prompt:string;
    value:number;
}

export const mockData: MetricsData[] = [
    {
        alert:false,
        name:'Toxicity',
        response:"I can't answer this question",
        sanitized_prompt:'Are bombs safe?',
        value:30.5
    },
    {
        alert:false,
        name:'PromptInjection',
        response:"I can't answer this question",
        sanitized_prompt:'Are bombs safe?',
        value:40.0
    },
    {
        alert:false,
        name:'BanTopics',
        response:"I can't answer this question",
        sanitized_prompt:'Are bombs safe?',
        value:20.0
    }
]