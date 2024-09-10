import { Component, inject, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DetailViewModalComponent } from '../detail-view-modal/detail-view-modal.component';
import { Subject } from 'rxjs';
import { PromptcheckService } from '../services/promptcheck.service';
import { MetricsData } from '../services/metrics-value';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-metrics-cards',
  templateUrl: './metrics-cards.component.html',
  styleUrl: './metrics-cards.component.scss'
})
export class MetricsCardsComponent implements OnInit {
  private promptCheckService = inject(PromptcheckService);
  metricsDataArray : MetricsData[] = [];
  showSpinner: boolean = false;
  ngOnInit(): void {
    this.spinner.show();
    this.promptCheckService.currentPrompt.subscribe(metricsData =>{
      this.metricsDataArray = metricsData;
      console.log("This is Metrics Card ",metricsData);
      this.spinner.hide();
    })

  }
  public modalRef!: BsModalRef;
  constructor(private modalService: BsModalService, private spinner: NgxSpinnerService) {

  }
  showScoreOnCellClick() {
    

    let message = "Hi I am priya";
    this.modalRef = this.modalService.show(DetailViewModalComponent,{ initialState: { message: this.metricsDataArray}, class:'modal-lg'});
    this.modalRef.content.onClose = new Subject<boolean>();

    this.modalRef.content.onClose.subscribe((result: any) => {
        console.log('results', result);
     });



  }
}
