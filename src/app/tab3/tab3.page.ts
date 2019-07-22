import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  title = "Grocery"

  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Bread",
      quantity: 5
    },
    {
      name: "Butter",
      quantity: 4
    },
    {
      name: "Wine",
      quantity: 1
    },
    {
      name: "Pork Loin",
      quantity: 1
    },
  ];

  constructor(public alertCtrl: AlertController, public toastCtrl: ToastController) {}

  async removeItem(item, index) {
    const toast = await this.toastCtrl.create({
      message: 'Item ' + index + ' has been deleted.',
      duration: 2000
    });
    toast.present();

    this.items.splice(index, 1);
  }

  addItem() {
    this.promptAddItem()
  }

  async promptAddItem() {
    const prompt = await this.alertCtrl.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'name',
          placeholder: 'Item Name',
        },
        {
          name: 'quantity',
          placeholder: 'Item Quantity'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: (data) => {
            console.log('Item Canceled');
          }
        },
        {
          text: 'Save',
          handler: (item) => {
            console.log('Item added', item);
            this.items.push(item);
          }
        }
      ]
    });
    prompt.present();
  }

}
