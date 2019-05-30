import React, {Component} from 'react';

class TaskForm extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.state = {form:{
            id:this.props.task.id, 
            description:this.props.task.description, 
            status:this.props.task.status
        }};

        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleToUpdate = this.props.handleToUpdate;
    }

    handleDescriptionChange(event) {
        let state = Object.assign({}, this.state);
        state.form.description = event.target.value;
        this.setState(state);
    }

    handleStatusChange(event) {
        let state = Object.assign({}, this.state);
        state.form.status = event.target.value;
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.handleToUpdate(this.state.form);
    }

    updateForm(formData) {
        console.log('updateForm: ', formData);
    }


    render() {
        return (
            <div>
                <p>Edit Task</p>
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <label>
                        Desc.
                        <input type="text" value={this.state.form.description} onChange={this.handleDescriptionChange}></input>
                    </label>
                    </div>

                    <div>
                    <label>
                        status
                        <select onChange={this.handleStatusChange}>
                            {this.props.gridStatus.map((status)=> {
                                let itemStatus = (status.id === this.state.form.status) ? 'Selected' : '';
                                return <option key={status.id} value={status.id} selected={itemStatus}>{status.name}</option>
                                }
                            )}
                        </select>
                    </label>
                    </div>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default TaskForm;