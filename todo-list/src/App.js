import React, {Component} from 'react';
import KanbanGrid from './ReactComponents/KanbanGrid.jsx';

class App extends Component{

  render() {
    return (
      <div id="ReactAppDiv">
        <KanbanGrid/>
      </div>
    );
  };
}

export default App;
