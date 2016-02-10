MyComponents.Task = React.createClass({

  render: function() {
  return (
      <div className="card red darken-4">
        <div className="card-content center-align white-text">
          <span className="card-title collection-item task.priority "> {this.props.task.title}</span>
            <p>
              Deadline: {this.props.task.deadline} <br/>
              Priority: {this.props.task.priority} <br/>
              Type: {this.props.task.type}
            </p>
        </div>     
      </div>
    );
  }
});
MyComponents.TaskList = React.createClass({
  render: function() {

    var taskElements = this.props.tasks.map(function(t,i){
      return <MyComponents.Task task={t} key={i}/>
    })
    return (
      <div className="card">
        <div className="card-content">
          {taskElements}
        </div>
      </div>
    );
  }
});
