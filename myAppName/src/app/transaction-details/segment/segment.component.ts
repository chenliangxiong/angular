import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.scss'],
})
export class SegmentComponent implements OnInit {
  showIcon11 = true;
  showIcon12 = false;
  showIcon13 = false;
  showIcon21 = true;
  showIcon22 = false;
  showIcon23 = false;
  constructor() { }

  ngOnInit() {}

  showDiv11(){
    this.showIcon11 = true;
    this.showIcon12 = false;
    this.showIcon13 = false;
  }
  showDiv12(){
    this.showIcon11 = false;
    this.showIcon12 = true;
    this.showIcon13 = false;
  }
  showDiv13(){
    this.showIcon11 = false;
    this.showIcon12 = false;
    this.showIcon13 = true;
  }

  showDiv21(){
    this.showIcon21 = true;
    this.showIcon22 = false;
    this.showIcon23 = false;
  }
  showDiv22(){
    this.showIcon21 = false;
    this.showIcon22 = true;
    this.showIcon23 = false;
  }
  showDiv23(){
    this.showIcon21 = false;
    this.showIcon22 = false;
    this.showIcon23 = true;
  }
}
