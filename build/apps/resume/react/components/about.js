MyComponents.About = React.createClass({

  render: function() {
    return (
      <div className="card red darken-4">
        <div className="card-content white-text">
		  <div className="row">
		    <div className="col s3">
		      <img class="materialboxed" width="100" src ="profile.jpg"></img>
            </div>
        <div className="col s7">
          <ul>
            <li><b>Name: </b> Chris Fanning </li>
            <li><b>Major: </b> BA in Computer Science </li>
            <li><b>Hometown: </b> Aurora, Colorado </li>
            <li><b>Git Link: </b><a href="https://github.com/clfchris">www.github.com/clfchris</a></li>
         </ul>
         </div>   
        </div>
      </div>
    </div>  
    );
  }

});
