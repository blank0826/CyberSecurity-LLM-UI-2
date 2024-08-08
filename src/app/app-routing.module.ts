import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatbotPageComponent } from './chatbot-page/chatbot-page.component';

const routes: Routes = [
  {path:'',redirectTo:'chatbot',pathMatch: 'full'},
  {path: 'chatbot', component : ChatbotPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
