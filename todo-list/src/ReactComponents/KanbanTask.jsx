import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TaskForm from './TaskForm';

class KanbanTask extends Component{
  
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    
  }

  editTaksHandle(taskId) {
    let task = this.props.tasks.find(t=> t.id === taskId);
console.log('Edit: ', taskId);
    ReactDOM.render(
      <TaskForm 
        task={task} 
        gridStatus={this.props.gridStatus } 
        handleToUpdate={this.props.parentHandleToUpdate.bind(this)}/>, 

      document.getElementById('tasksForm'));
  }

  render() {
    return (
      <div>
        <ul>
            {this.props.tasks.map((task)=>{
                if(this.props.taskStatus.id != task.status) {
                    return false;
                }
                
                return (<li key={task.id}>
                    {task.description} 
                    <button onClick={(e)=>this.editTaksHandle(task.id)}>Editar</button>
                </li>)
            })}
        </ul>
      </div>
    );
  };
}

export default KanbanTask;
