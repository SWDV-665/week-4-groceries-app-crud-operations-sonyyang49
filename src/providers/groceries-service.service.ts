import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceriesServiceService {

  //Creates an empty list of items.
  items = [];

  constructor() { }

  //Returns the items in the items array.
  getItems(){
    return this.items
  }

  //Adds the new input item to the end of the items array.
  addItem(item) {
    this.items.push(item);
  }

  //Updates the item with specified index in the array.
  editItem(item, index){
    this.items[index] = item;
  }

  //Remove the item with specified index in the array.
  removeItem(item, index){
    this.items.splice(index, 1);
  }


}
