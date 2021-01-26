import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'edit-add-payee',
  templateUrl: './edit-payee.page.html',
  styleUrls: ['./edit-payee.page.scss'],
})
export class EditPayeePage implements OnInit {

  constructor() { }

  public payee:any={
    payeeName:'',
    payeePhone:'',
    payeeAccount:'',
    bankName:'',
    bankNameList:['中国工商银行','中国农业银行','中国建设银行','中国银行'],
    city:'',
    cityName:['北京','上海','广西','广东','深圳'],
    site:'',
    nickName:''
  }

  ngOnInit() {
  }

}
