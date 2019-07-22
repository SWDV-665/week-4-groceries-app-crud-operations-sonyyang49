import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { GroceriesServiceService } from '../../providers/groceries-service.service';
import { InputDialogService } from '../../providers/input-dialog.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  title = "Grocery"

  constructor(public toastCtrl: ToastController, public groceryService: GroceriesServiceService, public dataInput : InputDialogService) {}

  getItems(){
    return this.groceryService.getItems();
  }

  async removeItem(item, index) {
    const toast = await this.toastCtrl.create({
      message: 'Item ' + index + ' has been deleted.',
      duration: 2000
    });
    toast.present();

    this.groceryService.removeItem(item, index);
  }

  async editItem(item, index) {
    const toast = await this.toastCtrl.create({
      message: 'Item ' + index + ' has been edited.',
      duration: 2000
    });
    toast.present();
    this.dataInput.showPrompt(item, index);
  }

  addItem() {
    this.dataInput.showPrompt();
  }



}
