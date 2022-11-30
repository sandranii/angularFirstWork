import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularFirstWork';
  list = [0];
  eventCount='';
  eventIndex='';
  index = 0;

  num:number = 0;

  addItem(){
    this.num ++;
    console.log('this.num', this.num);
    this.list.push(this.num);
    console.log('this.list',this.list);
  }
  log(event: any): void{
    console.log('father event點擊次數', event);
    this.eventCount=event;
  }
  logIndex(event: any): void{
    console.log('father2 event 點擊項目', event);
    this.eventIndex =event;
  }
}
