import "./App.css";
import SearchBar from "./components/SearchBar.js";
import Pagination from "./components/Pagination.js";
import SearchMovies from "./containers/SearchMovies";
import CardDeck from "./containers/CardDeck";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Ribbon from "./components/Ribbon.js";
import MovieCard from "./components/MovieCard.js";
import Rodal from "./components/Rodal.js";
import SharePage from "./components/SharePage";
import React from "react";
import {Interpolator} from 'react-apply-darkmode';
import {encode, decode} from 'string-encode-decode'

class App extends React.Component {
  state = {
    title: "",  
    startPage: 1,
    currMovies: [],
    currNominations: [],
    totalResults: 0,
    ribbon: false,
    selectedMovie: {},
    notif: false,
    numPages: 1,
  };

  changePageNum = async(num) => {
    await this.setState({...this.state,
      startPage: num,
    });

    await this.fetchMoviesJSON()
    .then(movies => {
      this.setState({
        currMovies: movies["Search"],
        numPages: Math.ceil(parseInt(movies["totalResults"]) / 10),
      }); // fetched movies
    });

  };

  handleChange = async(e) => {
    let new_title = e.target.value;
    await this.setState({...this.state,
      title: new_title,
      startPage: 1,
    });
    
    await this.fetchMoviesJSON()
    .then(movies => {
      this.setState({
        currMovies: movies["Search"],
        numPages: Math.ceil(parseInt(movies["totalResults"]) / 10),
      }); // fetched movies
    });

  };

  fetchMoviesJSON = async() => {
    const response = await fetch(`https://www.omdbapi.com/?type=movie&s=${this.state.title}&page=${this.state.startPage}&apikey=6654456b`);
      const movies = await response.json();
      console.log(movies,"boba")
      return movies;
    }

  addToNominations = (nomination) => {
    if (this.state.currNominations.length === 4) {
      let newNominations = [...this.state.currNominations, nomination];
      this.setState({...this.state,
        currNominations: newNominations,
        ribbon: true,
        notif: false,
      });
      // alert & ribbon
    } else if (this.state.currNominations.length < 4) {
      let newNominations = [...this.state.currNominations, nomination];
      this.setState({...this.state,
        currNominations: newNominations,
        ribbon: false,
        notif: false,
      });
    } else {
      debugger;
      this.setState({ ...this.state,notif: true, ribbon:true });
    }
  };

  updateSelectedMovie = (movie) => {
    this.setState({...this.state,
      selectedMovie: movie,
    });
  };

  removeSelected = () => {
    this.setState({ ...this.state,selectedMovie: {} });
  };

  removeNomination = (movie) => {
    let newNominations = this.state.currNominations.filter(
      (nom) => nom["imdbID"] !== movie["imdbID"]
    );
    this.setState({ ...this.state,currNominations: newNominations, selectedMovie: {}, ribbon:false });
  };

  changePage = async(symbol) => {
    if (symbol === "+" && this.state.startPage + 3 < this.state.numPages) {
      let newPage = parseInt(this.state.startPage) + 3;
      await this.setState({ ...this.state,startPage: newPage });
      
      await this.fetchMoviesJSON()
    .then(movies => {
      this.setState({
        currMovies: movies["Search"],
        numPages: Math.ceil(parseInt(movies["totalResults"]) / 10),
      }); // fetched movies
    });
    } else if (symbol === "-" && this.state.startPage > 3) {
      let newPage = parseInt(this.state.startPage) - 3;
      await this.setState({ ...this.state,startPage: newPage });
      
      await this.fetchMoviesJSON()
    .then(movies => {
      this.setState({
        currMovies: movies["Search"],
        numPages: Math.ceil(parseInt(movies["totalResults"]) / 10),
      }); // fetched movies
    });
    }
  };

  generateLink = () => {
    let ids = this.state.currMovies.map((movie) => movie["imdbID"])
    let en = encode(this.ids.join('-'))
    
  }

  render() {
    return (
      <Interpolator
      appearance='dark'
      watchSystem={false}
      filter={{brightness: 100, contrast:100, sepia: 20}}>
      <div className="App">
        <header className="App-header">
          <Header/>
          {this.state.notif === true && 
          <Rodal/>
          }
          {this.state.ribbon === true && <Ribbon />}
          <CardDeck
            nominations={this.state.currNominations}
            updateSelectedMovie={this.updateSelectedMovie}
          />
          {Object.keys(this.state.selectedMovie).length > 0 && (
            <MovieCard
              movie={this.state.selectedMovie}
              removeSelected={this.removeSelected}
              removeNomination={this.removeNomination}
            />
          )}
          <SearchBar handleChange={this.handleChange} />
          <Pagination
            startPage={this.state.startPage}
            changePage={this.changePage}
            changePageNum={this.changePageNum}
          />
          <SearchMovies
            movies={this.state.currMovies}
            addToNominations={this.addToNominations}
            currNominations={this.state.currNominations}
            removeNomination={this.removeNomination}
          />
          <div style={{ marginTop: 400 }}>
            <Footer />
          </div>
        </header>
      </div>
      </Interpolator>
    );
  }
}

export default App;


