import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import '../App.css';

@inject("groceryStore")
@observer
class AddGrocery extends Component {
  constructor(props) {
    super();
    this.state = {
      inputValue: ''
    };
  }

  updateValue = (e) => {
    this.setState({inputValue: e.target.value});
  };

  addItem = () => {
    if(this.state.inputValue){
      this.props.groceryStore.addItem(this.state.inputValue);
    }
    this.setState({inputValue:''});
  };

  render() {
    return(
      <div className="App">
        <h2>Add Item</h2>
        <input type="text" placeholder="Add Item" value={this.state.inputValue} onChange={(e) => {this.updateValue(e)}}/>
        <button type="button" onClick={this.addItem}>Add</button>
      </div>
    );
  }
}
export default AddGrocery;
