import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DetailViewModalComponent } from '../detail-view-modal/detail-view-modal.component';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-metrics-cards',
  templateUrl: './metrics-cards.component.html',
  styleUrl: './metrics-cards.component.scss'
})
export class MetricsCardsComponent implements OnInit {
  ngOnInit(): void {

  }
  public modalRef!: BsModalRef;
  constructor(private modalService: BsModalService) {

  }
  showScoreOnCellClick() {
    // const initialState = {
    //   data: { 'Toxicity': 5 },
    // }
    let message = "Hi I am priya";
    this.modalRef = this.modalService.show(DetailViewModalComponent,{ initialState: { message: message }, class:'modal-lg'});
    this.modalRef.content.onClose = new Subject<boolean>();

    this.modalRef.content.onClose.subscribe((result: any) => {
        console.log('results', result);
     });



  }
}
