import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-more-detail',
  templateUrl: './more-detail.page.html',
  styleUrls: ['./more-detail.page.scss'],
})
export class MoreDetailPage implements OnInit {

  constructor(public toastController: ToastController,
    public alertController: AlertController) { }

  ngOnInit() {
  }

  async onClick() {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: '确定要撤单吗',
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
      message: '撤单成功',
      position: 'middle',         //按钮在页面中的位置
      color: 'danger',            //按钮颜色
      cssClass: 'tab1Toast',
      duration: 800
    });
    toast.present();
  }

}
