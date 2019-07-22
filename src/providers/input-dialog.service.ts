import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from './groceries-service.service';

@Injectable({
  providedIn: 'root'
})
export class InputDialogService {

  constructor(public alertCtrl: AlertController, public groceryService: GroceriesServiceService) { }

  async showPrompt(item?, index?) {
    const prompt = await this.alertCtrl.create({
      header: item ? "Edit Item" : "Add Item",
      message: item ? "Please edit item..." : "Please enter item information...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Item Name',
          value: item ? item.name : null
        },
        {
          name: 'quantity',
          placeholder: 'Item Quantity',
          value: item ? item.quantity : null
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
            if (index !== undefined){
              this.groceryService.editItem(item, index);
            }
            else {
              this.groceryService.addItem(item);
            }

          }
        }
      ]
    });
    prompt.present();
  }
}
