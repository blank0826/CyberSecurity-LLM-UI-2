import { Component, OnInit } from '@angular/core';
import { ChatWithBot, ResponseModel } from '../models/model-response';
import { PromptcheckService } from '../services/promptcheck.service';
import { MetricsData } from '../services/metrics-value';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-chatbot-page',
  templateUrl: './chatbot-page.component.html',
  styleUrl: './chatbot-page.component.scss',
})
export class ChatbotPageComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  chatConversation: ChatWithBot = { person: '', response: '', scssClass: '' };
  response!: ResponseModel | undefined;
  promptText = '';
  showSpnner = false;
  showResponse = false;
  promptSuggest: string = '';
  metricsData: MetricsData[] = [];

  constructor(
    private metricsValue: PromptcheckService,
    private spinner: NgxSpinnerService
  ) {}

  public get isShowReponse() {
    console.log('isshow repsone' + this.showResponse);
    return this.showResponse;
  }

  checkResponse() {
    console.log(this.promptText);
    this.showResponse = false;
    console.log(this.showResponse);
    this.pushChatContent(this.promptText, 'You', 'Person');
    this.promptText = '';
  }

  pushChatContent(content: string, person: string, scssClass: string) {
    const chatToPush: ChatWithBot = {
      person: person,
      response: content,
      scssClass: scssClass,
    };
    this.chatConversation = chatToPush;
    // // this.metricsValue.sendPromptToService(content).then((result)=>this.metricsData = result);
    // this.metricsValue.currentPrompt.next([]);
    this.metricsValue.sendPromptToService(content);
    console.log('chat' + this.showResponse);
    this.metricsValue.currentPrompt.subscribe((metricsData) => {
      this.promptSuggest = metricsData[0].sanitized_prompt
        ? 'Sanitized Prompt: ' + metricsData[0].sanitized_prompt
        : 'Response: ' + metricsData[0].response;
      this.showResponse = true;
    });
    // // console.log(this.metricsData);
  }

  getText(data: string) {
    return data.split('\n').filter((f) => f.length > 0);
  }

  invokeGPT() {}
}
