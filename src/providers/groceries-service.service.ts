import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceriesServiceService {

  items = [];

  constructor() { }

  getItems(){
    return this.items
  }

  addItem(item) {
    this.items.push(item);
  }

  editItem(item, index){
    this.items[index] = item;
  }

  removeItem(item, index){
    this.items.splice(index, 1);
  }


}
