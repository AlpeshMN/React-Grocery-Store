import React, {Component} from 'react';
import '../styles/grocery.css';
import AddGrocery from './AddGrocery';
import GroceryTable from './GroceryTable';

export default class GroceryMaster extends Component {
  render() {
    return(
      <div className="App">
        <h1>Grocery ToDo App:</h1>
        <AddGrocery/>
        <GroceryTable/>
      </div>
    );
  }
}
