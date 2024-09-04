import { Injectable } from '@angular/core';
import { MetricsData, mockData } from './metrics-value';
import { BehaviorSubject, lastValueFrom, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PromptcheckService {
  private apiUrl = 'http://localhost:5000/api/data';
  // private metricsData : MetricsData[] = [];
  private metricsData : MetricsData[] = mockData;

  private dataSource = new BehaviorSubject<MetricsData[]>([]);
  currentPrompt = this.dataSource.asObservable();

  constructor(private http:HttpClient) { }

  // sendPromptToService(prompt: any):Promise<MetricsData[]>{
  //   return lastValueFrom(this.http.get<any>(`/api+${prompt}`,{withCredentials:true}).pipe(map((response) => {
  //     const data = response;
  //     return this.metricsData;
  //   })));
  // }
  // sendPromptToService(prompt:any):MetricsData[]{
  //   this.dataSource.next(prompt);
  // }
  sendPromptToService(prompt: any){
    //this.datasource will be changes when this method is called
    this.http.get<MetricsData[]>(`${this.apiUrl}+${prompt}`).subscribe(
      (response)=>{
        this.metricsData = response;
      },
      (error)=>{
        console.error('Error fetching data',error);
      }
    )
    this.dataSource.next(this.metricsData);
  }
}
