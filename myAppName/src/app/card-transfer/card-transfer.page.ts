import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-card-transfer',
  templateUrl: './card-transfer.page.html',
  styleUrls: ['./card-transfer.page.scss'],
})
export class CardTransferPage implements OnInit {

  constructor(public toastController: ToastController,public alertController: AlertController,public actionSheetController:ActionSheetController) {}

  public displagButton:any="display:hidden";
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
            this.presentActionSheet();
          }
        }
      ]
    });
    await alert.present();
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
