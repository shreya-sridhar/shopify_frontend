import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Flippy, { FrontSide, BackSide } from 'react-flippy';

export default class Movie extends React.Component {

  state = {
    details : {}
  }

  componentDidMount(){
    fetch(`http://www.omdbapi.com/?i=${this.props.movie["imdbID"]}&apikey=41227138`)
        .then(resp => resp.json())
        .then(data => this.setState({details: data}))
  }

  render() {
    return (
    <Flippy
        flipOnHover={false} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
        style={{ width: '300px', height: '400px' }} /// these are optional style, it is not necessary
    >
        <FrontSide
        style={{
            backgroundColor: '#41669d',
            backgroundImage: `url(${this.props.movie["Poster"]})`,
        }}
        >
        {/* <h5 style={{textAlign:"center"}}>{this.props.movie["Title"]} ({this.props.movie["Year"]})</h5> */}
        <button type="button" className="btn btn-success">Details</button>
        <button type="button" className="btn btn-success">Nominate</button>
        </FrontSide>
        <BackSide
        style={{ backgroundColor: 'black', fontSize: 10}}>
          <article class="card-body p-5" style={{padding:0}}>
          <h5 style={{textAlign:"center"}}>{this.props.movie["Title"]} ({this.props.movie["Year"]})</h5>

<p class="price-detail-wrap" style={{padding:0}}> 
	<span class="price h6 text-warning"> 
		<span class="currency">{this.state.details["Rated"]}</span><span class="num"></span>
	</span>
  <br></br>
  <span class="price h6 text-warning"> 
		<span class="currency">{this.state.details["Runtime"]}</span><span class="num"></span>
	</span> 
</p> 
<dl class="item-property" style={{padding:0}}>
  <dt>Plot</dt>
  <dd><p>{this.state.details["Plot"]}</p></dd>
</dl>
<dl class="param param-feature" style={{padding:0}}>
  <dt>Genre</dt>
  <dd> {this.state.details["Genre"]}</dd>
</dl>  
<dl class="param param-feature" style={{padding:0}}>
  <dt>Actors</dt>
  <dd>{this.state.details["Actors"]}</dd>
</dl>
<dl class="param param-feature" style={{padding:0}}>
  <dt>Director</dt>
  <dd>{this.state.details["Director"]}</dd>
</dl>

<hr></hr>
	<a href="google.com" class="btn btn-sm btn-primary text-uppercase" style={{padding:1}}> IMDB Site </a>
</article> 
    
        </BackSide>
  </Flippy>
    );
  }
}
