import { Component } from "@angular/core";
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  public list: any = [];

  constructor(public toastController: ToastController,public alertController: AlertController) {}


  ngOnInit() {
    console.log('ngoninit');
    for (var i = 0; i < 5; i++) {
      this.list.push(`收款人${i}`);
    }
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: '删除收款人',
      // message: '确认要删除吗？',
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
            this.presentToast();
          }
        }
      ]
    });

    await alert.present();
  }
  

  async presentToast() {
    const toast = await this.toastController.create({
      message: '删除成功',
      position: 'middle',         //按钮在页面中的位置
      color: 'danger',            //按钮颜色
      cssClass: 'tab1Toast',
      duration: 800
    });
    toast.present();
  }

}
