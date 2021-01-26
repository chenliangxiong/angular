import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-payee',
  templateUrl: './add-payee.page.html',
  styleUrls: ['./add-payee.page.scss'],
})
export class AddPayeePage implements OnInit {

  constructor() { }

  public payee:any={
    payeeName:'',
    payeePhone:'',
    payeeAccount:'',
    bankName:'',
    bankNameList:['工商银行','农业银行','建设银行','中国银行'],
    city:'',
    cityName:['北京','上海','广西','广东','深圳'],
    site:'',
    nickName:''
  }

  ngOnInit() {
  }

}
