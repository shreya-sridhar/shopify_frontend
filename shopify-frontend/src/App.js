import './App.css';
import SearchBar from './components/SearchBar.js';
import Pagination from './components/Pagination.js';
import SearchMovies from './containers/SearchMovies';
import CardDeck from './containers/CardDeck';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Confetti from './components/Confetti.js';
import React from 'react';

class App extends React.Component {
  state = {
    title: "",
    pageNum: 1,
    currRecords: [],
    currNominations: [],
    totalResults: 0,
    confetti:false
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
  debugger
    let new_title =   e.target.value
    this.setState({
      title: new_title
    })
}

addToNominations = (nomination) => {
  if (this.state.currNominations.length == 4)
  {
    let newNominations = [...this.state.currNominations,nomination]
    this.setState({currNominations: newNominations, confetti: true})
  }
  let newNominations = [...this.state.currNominations,nomination]
  this.setState({currNominations: newNominations, confetti: false})
}

render(){
return (
  <div className="App">
    <header className="App-header">
      <Header />
      {this.state.confetti && <Confetti/>}
      <h6 style={{marginTop:65, fontWeight:'lighter'}}>Your Nominations</h6>
      <CardDeck nominations = {this.state.currNominations} />
      <SearchBar handleChange = {this.handleChange} />
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



