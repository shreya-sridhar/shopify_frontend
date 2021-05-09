import './App.css';
import SearchBar from './components/SearchBar.js';
import Pagination from './components/Pagination.js';
import SearchMovies from './containers/SearchMovies';
import CardDeck from './containers/CardDeck';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Message from './components/Message.js';
import MovieCard from './components/MovieCard.js';
import React from 'react';

class App extends React.Component {
  state = {
    title: "",
    pageNum: 1,
    currRecords: [],
    currNominations: [],
    totalResults: 0,
    confetti:false,
    selectedMovie: {}
}

componentDidUpdate() {
    fetch(`https://www.omdbapi.com/?type=movie&s=${this.state.title}&page=${this.state.pageNum}&apikey=41227138`)
        .then(resp => resp.json())
        .then(data => {
          if (data["Response"])
          {
            console.log("hurry")
            this.setState({currRecords: data["Search"]})
          }
        }
        )
}

handleChange = (e) => {
    let new_title =   e.target.value
    this.setState({
      title: new_title
    })
}

addToNominations = (nomination) => {
  if (this.state.currNominations.length === 4)
  {
    let newNominations = [...this.state.currNominations,nomination]
    this.setState({currNominations: newNominations, confetti: true})
  }
  let newNominations = [...this.state.currNominations,nomination]
  this.setState({currNominations: newNominations, confetti: false})
}

updateSelectedMovie = (movie) => {
  this.setState({
    selectedMovie: movie
  })
}

removeSelected = (movie) => {
  this.setState({selectedMovie:{}})
}

removeNomination = (movie) => {
  let newNominations = this.state.currNominations.filter((nom) => nom["imdbID"] !== movie["imdbID"])
  this.setState({currNominations: newNominations,selectedMovie:{}});
}

render(){
return (
  <div className="App">
    <header className="App-header">
      <Header />
      {this.state.confetti && <Message/>}
      <h6 style={{marginTop:65, fontWeight:'lighter'}}>Your Nominations</h6>
      <CardDeck nominations = {this.state.currNominations} updateSelectedMovie={this.updateSelectedMovie} />
      {Object.keys(this.state.selectedMovie).length>0 && <MovieCard movie = {this.state.selectedMovie} removeSelected={this.removeSelected} removeNomination={this.removeNomination}/>}
      <SearchBar handleChange = {this.handleChange} />
      <h6 style={{padding:15}}>Nominate Now!</h6>
      <Pagination/>
      <SearchMovies movies = {this.state.currRecords} addToNominations={this.addToNominations} currNominations={this.state.currNominations}/>
      <div style={{marginTop:400}}>
      <Footer/>
      </div>
    </header>
  </div>
);}
}

export default App;



