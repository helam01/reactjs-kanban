
import React, {Component} from 'react';
import KanbanTask from './KanbanTask';

class KanbanGrid extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.state = {
            tasks : [
                {id:1, description:"Checking out React JS", status:3},
                {id:2, description:"Install Docker for ReactJS", status:5},
                {id:3, description:"Install ReactJS Lib", status:4},
                {id:4, description:"Create ReactJS Simple page", status:1},
                {id:5, description:"Use ReactJS on a simple page on JPC", status:1},
            ],
            gridStatus: [
                {id:1, name:"Backlog"},
                {id:2, name:"Todo"},
                {id:3, name:"Doing"},
                {id:4, name:"Testing"},
                {id:5, name:"Complete"},
            ]
        }
    }

    handleToUpdate(data) {
        this.updateTask(data);
    }

    updateTask(taskData) {
        let state = Object.assign({}, this.state);
        
        let tasks = state.tasks.map((item)=> {
          if(item.id === taskData.id) {
              item = taskData;
          }
          return item;
        });

        state.tasks = tasks;
    
        this.setState(state);
      }

    render() {
        return(
            <div id="kanban-block">
                <div id="kanban-grid">
                    {this.state.gridStatus.map((status)=>
                        <div className="grid-column" key={status.id}>
                            <p>{status.name}</p>
                            <div className="column-block">
                                <KanbanTask 
                                    taskStatus={status} 
                                    gridStatus={this.state.gridStatus} 
                                    parentHandleToUpdate={this.handleToUpdate.bind(this)}
                                    tasks={this.state.tasks}/>
                            </div>
                        </div>
                    )}
                </div>

                <div id="tasksForm"></div>
            </div>

        );
    };
}

export default KanbanGrid;