import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advance-transfer',
  templateUrl: './advance-transfer.page.html',
  styleUrls: ['./advance-transfer.page.scss'],
})
export class AdvanceTransferPage implements OnInit {

  constructor() { }

  public display:any = false;

  ngOnInit() {
  }

  onclick(){
    this.display = !this.display;
  }

}
