import React, {Component} from 'react';
import Grocery from './Grocery';
import {inject, observer} from 'mobx-react';

@inject("groceryStore")
@observer
class GroceryTable extends Component {
  render() {
    const store = this.props.groceryStore;
    return(
      <div>
          <h2>Total: {store.totalGroceryItem}</h2>
          <div className="list">
              {store.groceries.map((g,index) =>  <Grocery key={index} name={g}/> )}
          </div>
      </div>
    );
  }
}
export default GroceryTable;
