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
  chatConversation: ChatWithBot = {person:'',response:'',scssClass:''};
  response!: ResponseModel | undefined;
  promptText = '';
  showSpnner=false;

  constructor(){}
  checkResponse(){
    console.log(this.promptText);
    this.pushChatContent(this.promptText,'You','Person');
    this.invokeGPT();
    this.promptText='';
  }

  pushChatContent(content:string,person:string,scssClass:string){
    const chatToPush: ChatWithBot = {person:person,response:content,scssClass:scssClass};
    this.chatConversation = chatToPush;

  }

  getText(data:string){
    return data.split('\n').filter(f=>f.length>0);
  }

  invokeGPT(){

  }

}
