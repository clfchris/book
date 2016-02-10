MyComponents.City = React.createClass({

  render: function() {

    this.props.city.currently.icon = "images/" + this.props.city.currently.icon + ".png"
    return (

      <div className="col s4">
        <div className="card red darken-4">
          <div className="card-content white-text">
            <br><img class="activator" width="500" hieght="500" src={"images/"+this.props.city.name+".jpg"}/></br>
            <span className="card-title">{this.props.city.name.toUpperCase()}</span>
           <ul class="collection">
              <li class="collection-item">{this.props.city.minutely.summary}</li>
              <li class="collection-item">Temperature:  {this.props.city.currently.temperature} degrees F</li>
              <li class="collection-item">Cloud Cover: {this.props.city.currently.cloudCover} </li>
              <li class="collection-item">Precipitation Probability:  {this.props.city.currently.precipProbability} </li>
              <li class="collection-item">Nearest Storm: {this.props.city.currently.nearestStormDistance} miles away</li> 
           </ul>
          </div>
        </div>
      </div>
      );
    }
});
MyComponents.City = React.createClass({
  render: function() {

    var cityElements = this.props.cities.map(function(c,i){
      return <MyComponents.City city={c} key={i}/>
    })

    return (
      <ul className="collection">
        {cityElements}
      </ul>
    );
  }
});
