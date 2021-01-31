import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Component, OnInit ,ElementRef} from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-card-transfer',
  templateUrl: './card-transfer.page.html',
  styleUrls: ['./card-transfer.page.scss'],
})
export class CardTransferPage implements OnInit {

  constructor(public toastController: ToastController,
    public alertController: AlertController,
    public actionSheetController:ActionSheetController,
    public elementRef:ElementRef) {}

  public countInput = 0;
  public number:any = ['','','','','',''];
  public list: any = [];
  public display = false;
  public showPayee = false;

  // 发送给后端的数据

  public payee:any={
    payeeName:'',
    payeeAccount:'',
    bankId:['工商银行','农业银行','建设银行','中国银行'],
    amount:'',
    payAccount:'',
    desc:'',
    userId:-1,
  }

  serviceFee:any = 0;

  ngOnInit() {
    
    for (var i = 0; i < 5; i++) {
      this.list.push(`收款人${i}`);
    }
  }
  
  public getServiceFee(){
    // if(this.payee.amount>=100000){

    // }
    this.serviceFee = this.payee.amount*0.002;
    if(this.serviceFee<=0.01){
      this.serviceFee=0.01;
    }
  }

  //支付页面

  public closePay(){
    this.display = false;
  }

  public changefocus(){
    if(this.countInput<0){
      setTimeout(() => {
        this.elementRef.nativeElement.querySelector('.pw1').focus();
      }, 0);
      this.countInput=0;
      console.log(this.countInput);
      return;
    }if(this.countInput==0){
      setTimeout(() => {
        this.elementRef.nativeElement.querySelector('.pw1').focus();
      }, 0);
    }
    this.countInput++;
    if(this.countInput==1){
      setTimeout(() => {
        this.elementRef.nativeElement.querySelector('.pw2').focus();
      }, 0);
    }else if(this.countInput==2){
      setTimeout(() => {
        this.elementRef.nativeElement.querySelector('.pw3').focus();
      }, 0);
    }else if(this.countInput==3){
      setTimeout(() => {
        this.elementRef.nativeElement.querySelector('.pw4').focus();
      }, 0);
    }else if(this.countInput==4){
      setTimeout(() => {
        this.elementRef.nativeElement.querySelector('.pw5').focus();
      }, 0);
    }else if(this.countInput==5){
      setTimeout(() => {
        this.elementRef.nativeElement.querySelector('.pw6').focus();
      }, 0);
    }else if(this.countInput>=6){
      setTimeout(() => {
        this.elementRef.nativeElement.querySelector('.pw6').focus();
      }, 0);
      this.countInput=6;
      console.log(this.countInput);
      return;
    }
  }

  public inputNum1(){
    this.number[this.countInput]='1';
    this.changefocus();
  }
  public inputNum2(){
    this.number[this.countInput]='2';
    this.changefocus();
  }
  public inputNum3(){
    this.number[this.countInput]='3';
    this.changefocus();
  }
  public inputNum4(){
    this.number[this.countInput]='4';
    this.changefocus();
  }
  public inputNum5(){
    this.number[this.countInput]='5';
    this.changefocus();
  }
  public inputNum6(){
    this.number[this.countInput]='6';
    this.changefocus();
  }
  public inputNum7(){
    this.number[this.countInput]='7';
    this.changefocus();
  }
  public inputNum8(){
    this.number[this.countInput]='8';
    this.changefocus();
  }
  public inputNum9(){
    this.number[this.countInput]='9';
    this.changefocus();
  }
  public inputNum0(){
    this.number[this.countInput]='0';
    this.changefocus();
  }
  public backspace(){
    this.number[this.countInput-1]='';
    this.countInput-=2;
    this.changefocus();
  }

//   按钮页面

  payeeList(){
    this.showPayee = !this.showPayee;
  }

  async onClick() {
    const alert = await this.alertController.create({
      header: '确认转账信息',
      message: '转账给'+this.payee.payeeName,
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            // console.log('Confirm Cancel: blah');
          }
        }, {
          cssClass: 'secondary',
          text: '确认',
          handler: () => {
            this.display = true;
          }
        }
      ]
    });
    await alert.present();
  }

  public close(){
    this.display = false;
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'my-custom-class',
      buttons: [{
      text: '支付页面',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
