import { Component, OnInit } from '@angular/core';
import { ChatWithBot, ResponseModel } from '../models/model-response';
import { PromptcheckService } from '../services/promptcheck.service';
import { MetricsData } from '../services/metrics-value';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-chatbot-page',
  templateUrl: './chatbot-page.component.html',
  styleUrl: './chatbot-page.component.scss'
})
export class ChatbotPageComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  chatConversation: ChatWithBot = {person:'',response:'',scssClass:''};
  response!: ResponseModel | undefined;
  promptText = '';
  showSpnner=false;
  promptSuggest:string ='' ;
  metricsData:MetricsData[]=[];

  constructor(private metricsValue: PromptcheckService, private spinner: NgxSpinnerService){}
  checkResponse(){
    console.log(this.promptText);
    this.pushChatContent(this.promptText,'You','Person');
    this.pushChatContent(this.promptText,'You','Person');
    this.invokeGPT();
    this.promptText='';
  }

  pushChatContent(content:string,person:string,scssClass:string){
    const chatToPush: ChatWithBot = {person:person,response:content,scssClass:scssClass};
    this.chatConversation = chatToPush;
    // // this.metricsValue.sendPromptToService(content).then((result)=>this.metricsData = result);
    this.metricsValue.sendPromptToService(content);
    this.metricsValue.currentPrompt.subscribe((metricsData) => {
      this.promptSuggest = metricsData[0].sanitized_prompt;
    });
    // // console.log(this.metricsData);


  }

  getText(data:string){
    return data.split('\n').filter(f=>f.length>0);
  }

  invokeGPT(){

  }

}
