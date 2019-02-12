import React, { Component } from 'react';
import './App.css';

import {Provider} from 'mobx-react';
import GroceryMaster from './Components/GroceryMaster';
import GroceryStore from './stores/groceryStore';

const groceryStore = new GroceryStore();
class App extends Component {
  render() {
    return (
      <Provider groceryStore={groceryStore}>
        <div className="App">
          <GroceryMaster />
        </div>
      </Provider>
    );
  }
}

export default App;
