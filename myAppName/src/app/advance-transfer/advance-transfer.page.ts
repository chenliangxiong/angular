import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advance-transfer',
  templateUrl: './advance-transfer.page.html',
  styleUrls: ['./advance-transfer.page.scss'],
})
export class AdvanceTransferPage implements OnInit {

  public list:any = [];
  public normal:any = true;
  public completed:any = false;
  public cancel :any = false;

  constructor() { }

  public display:any = false;

  ngOnInit() {
    for(var i=0 ;i<5;i++){
      this.list.push(i);
    }
  }

  normalButton(){
    this.normal = true;
    this.completed = false;
    this.cancel = false;
  }
  completedButton(){
    this.normal = false;
    this.completed = true;
    this.cancel = false;
  }
  cancelButton(){
    this.normal = false;
    this.completed = false;
    this.cancel = true;
  }
}
