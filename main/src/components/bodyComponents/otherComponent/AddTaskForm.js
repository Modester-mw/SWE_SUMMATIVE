import React from 'react'
import { MondayTasks, TuesdayTasks, WednesdayTasks, ThursdayTasks, FridayTasks, SaturdayTasks, SundayTasks } from '../../dataComponents/Tasks'

class AddTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task_title: true,
      task_description: '',
      start_time: "00:00",
      end_time:"01:00" ,
      full_date: "2021-12-16",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  
  handleSubmit(event) {
    ThursdayTasks.push(this.state)
    alert('Submited: ' + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return (
      <form className="add-task-pop-up-form" onSubmit={this.handleSubmit}>
        <h3>Add task</h3>
        
        <label>
          Date:
          <input name="full_date" type="date" checked={this.state.full_date} onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Title:
          <input name="task_title" type="text" checked={this.state.task_title} onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Description:
          <input name="task_description" type="text" value={this.state.task_description} onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Start:
          <input name="start_time" type="text" value={this.state.start_time} onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          End:
          <input name="end_time" type="text" value={this.state.end_time} onChange={this.handleInputChange} />
        </label>
        <br />
        <input type="submit" value="Submit" className="submit-button" />
      </form>
    );
  }
}

export default AddTaskForm
