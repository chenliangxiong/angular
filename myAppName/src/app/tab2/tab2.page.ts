import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public list: any = {};

  constructor(public activitivatedRouted:ActivatedRoute) {}

  ngOnInit(){
    this.activitivatedRouted.queryParams.subscribe((data)=>{
      console.log(data);
      this.list = data;
    })
  }

}
