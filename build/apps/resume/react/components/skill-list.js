MyComponents.Skill = React.createClass({
  render: function() {
    return (
      <li>
        <br><b> Language: </b>{this.props.skill.name}</br>
      </li>
    );
  }
});

MyComponents.SkillList = React.createClass({
  render: function() {

    var skillElements = this.props.skills.map(function(s,i){
      return <MyComponents.Skill skill={s} key={i}/>
    })

    return (
      <div className="card red darken-4">
        <div className="card-content white-text">
        <span class="card-title"> Skills </span>
        {this.props.skills.length}
        {skillElements}
        </div>
      </div>
    );
  }
});
