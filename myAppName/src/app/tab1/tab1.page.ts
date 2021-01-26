import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public list:any=[];
  
  constructor() {}

  ngOnInit(){
    for(var i=0;i<5;i++){
      this.list.push(`收款人${i}`)
    }
  }
}
