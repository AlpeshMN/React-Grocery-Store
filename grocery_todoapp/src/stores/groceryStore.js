import { observable, action, computed } from 'mobx';

export default class GroceryStore {
  @observable groceries = [];

  @action addItem = (g) => {
    this.groceries.push(g);
  };

  @action removeItem = (g) => {
    this.groceries.remove(g);
  };

  @computed get totalGroceryItem() {
    return this.groceries.length;
  };
}
