import './App.css';
import SearchBar from './components/SearchBar.js';
import Pagination from './components/Pagination.js';
import SearchMovies from './containers/SearchMovies';
import CardDeck from './containers/CardDeck';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import React from 'react';

class App extends React.Component {
  state = {
    title: "",
    pageNum: 1,
    currRecords: [],
    currNominations: [],
    totalResults: 0
}

componentDidUpdate() {
    fetch(`https://www.omdbapi.com/?type=movie&s=${this.state.title}&page=${this.state.pageNum}&apikey=41227138`)
        .then(resp => resp.json())
        .then(data => this.setState({currRecords: data["Search"]}))
}

onSubmit = (e,movie) => {
  e.preventDefault()
  this.setState({
    title: movie
  })
}

addToNominations = (nomination) => {
  let newNominations = [...this.state.currNominations,nomination]
  this.setState({currNominations: newNominations})
}

render(){
return (
  <div className="App">
    <header className="App-header">
      <Header />
      <h6 style={{marginTop:65, fontWeight:'lighter'}}>Your Nominations</h6>
      <CardDeck nominations = {this.state.currNominations} />
      <SearchBar onSubmit = {this.onSubmit} />
      <h6 style={{padding:15}}>Nominate Now!</h6>
      <Pagination/>
      <SearchMovies movies = {this.state.currRecords} addToNominations={this.addToNominations}/>
      <div style={{marginTop:400}}>
      <Footer/>
      </div>
    </header>
  </div>
);}
}

export default App;



