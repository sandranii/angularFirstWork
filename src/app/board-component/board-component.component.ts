import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-board-component',
  templateUrl: './board-component.component.html',
  styleUrls: ['./board-component.component.scss']
})
export class BoardComponentComponent implements OnInit {
  i = 0;
  idx = 0;
  count = 0;
  aaa = 0
  constructor() { }

  ngOnInit(): void {
  }
  @Input() index: number = 999;
  @Input() data: string ='';
  @Output() indexChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() idxChange: EventEmitter<number> = new EventEmitter<number>();

  // addClick(i:number){
  //   i = this.index;
  //   console.log(i);
  // }
  removeItem(i:number){
    i=this.index;
    console.log(i);
  }
  eventClick($event: any){
    this.count ++;
    console.log('this.count', this.count);
    // console.log('event', event);
    console.log('$event', $event);
    console.log('$event.target', $event.target);
    // this.aaa = this.count;
    this.indexChange.emit(this.count);
    // this.idx = this.index;
    this.idxChange.emit(this.index);
    // console.log('this.idx', this.idx);
  }
}
