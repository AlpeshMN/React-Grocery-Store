import React, {Component} from 'react';
import '../App.css';
import {inject, observer} from 'mobx-react';
import GroceryStore from '../stores/groceryStore';
@inject("groceryStore")
@observer
class Grocery extends Component {
  removeIt = () => {
    this.props.groceryStore.removeItem(this.props.name);
  };

  render() {
    return(
      <div className="App">
        <li onClick={this.removeIt} key={this.props.index}>{this.props.name}</li>
      </div>
    );
  }
}
export default Grocery;
