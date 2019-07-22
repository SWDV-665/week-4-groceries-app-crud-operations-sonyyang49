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

  //This is the title of the page.
  title = "Grocery"

  constructor(public toastCtrl: ToastController, public dataService: GroceriesServiceService, public dataInput : InputDialogService) {}

  //Returns the grocery items from the injectable service.
  getItems(){
    return this.dataService.getItems();
  }

  //Removes the item with specified index from items array in the injectable service.
  async removeItem(item, index) {
    const toast = await this.toastCtrl.create({
      message: 'Item ' + index + ' has been deleted.',
      duration: 2000
    });
    toast.present();

    this.dataService.removeItem(item, index);
  }

  //Updates the item with specified index from items array in the injectable service.
  async editItem(item, index) {
    const toast = await this.toastCtrl.create({
      message: 'Item ' + index + ' has been edited.',
      duration: 2000
    });
    toast.present();
    this.dataInput.showPrompt(item, index);
  }

  //Creates a new item at the end of the items array in the injectable service.
  addItem() {
    this.dataInput.showPrompt();
  }



}
