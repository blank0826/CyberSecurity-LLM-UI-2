import { Injectable } from '@angular/core';
import { MetricsData, mockData } from './metrics-value';
import { BehaviorSubject, lastValueFrom, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class PromptcheckService {
  metricsData: MetricsData[] = [];
  // private metricsData : MetricsData[] = mockData;
  private apiUrl = 'http://localhost:5000/api/data';
  private dataSource = new BehaviorSubject<MetricsData[]>([]);
  currentPrompt = this.dataSource.asObservable();

  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {}

  // sendPromptToService(prompt: any):Promise<MetricsData[]>{
  //   return lastValueFrom(this.http.get<any>(`/api+${prompt}`,{withCredentials:true}).pipe(map((response) => {
  //     const data = response;
  //     return this.metricsData;
  //   })));
  // }
  // sendPromptToService(prompt:any):MetricsData[]{
  //   this.dataSource.next(prompt);
  // }
  sendPromptToService(prompts: any) {
    //this.datasource will be changed when this method is called
    const params = { prompt: prompts };
    this.spinner.show();
    this.dataSource.next([]);
    this.http.get<MetricsData[]>(this.apiUrl, { params }).subscribe(
      (response) => {
        console.log(response);
        this.metricsData = response;
        console.log('mD1', this.metricsData);
        this.dataSource.next(this.metricsData);
        this.spinner.hide();
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );
  }
}
