import { Component, OnInit } from '@angular/core';
import { ChatWithBot, ResponseModel } from '../models/model-response';



@Component({
  selector: 'app-chatbot-page',
  templateUrl: './chatbot-page.component.html',
  styleUrl: './chatbot-page.component.scss'
})
export class ChatbotPageComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  chatConversation: ChatWithBot[]=[];
  response!: ResponseModel | undefined;
  promptText = '';
  showSpnner=false;

  constructor(){}
  checkResponse(){
    this.pushChatContent(this.promptText,'You','Person');
    this.invokeGPT(this.promptText)
    this.promptText = '';
  }

  pushChatContent(content:string,person:string,scssClass:string){
    const chatToPush: ChatWithBot = {person:person,response:content,scssClass:scssClass};
    this.chatConversation.push(chatToPush);

  }

  getText(data:string){
    return data.split('\n').filter(f=>f.length>0);
  }

  invokeGPT(content:string){
    this.pushChatContent("Hi How can I help you?",'Mr Bot','bot');

  }

}
