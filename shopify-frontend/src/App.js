import "./App.css";
import SearchBar from "./components/SearchBar.js";
import Pagination from "./components/Pagination.js";
import SearchMovies from "./containers/SearchMovies";
import CardDeck from "./containers/CardDeck";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Message from "./components/Message.js";
import MovieCard from "./components/MovieCard.js";
import Alert from "./components/Alert.js";
import React from "react";

class App extends React.Component {
  state = {
    title: "",
    startPage: 1,
    currRecords: [],
    currNominations: [],
    totalResults: 0,
    confetti: false,
    selectedMovie: {},
    notif: false,
    numPages: 1,
  };



  componentDidUpdate() {
    fetch(
      `https://www.omdbapi.com/?type=movie&s=${this.state.title}&page=${this.state.startPage}&apikey=6654456b`
    )
      .then((resp) => resp.json())
      .then((data) => {
        if (data["Response"]) {
          this.setState({
            currRecords: data["Search"],
            numPages: Math.ceil(parseInt(data["totalResults"]) / 10),
          });
        }
      });
  }

  changePageNum = (num) => {
    this.setState({...this.state,
      startPage: num,
    });
  };

  handleChange = (e) => {
    let new_title = e.target.value;
    this.setState({...this.state,
      title: new_title,
      startPage: 1,
    });
  };

  addToNominations = (nomination) => {
    if (this.state.currNominations.length === 4) {
      let newNominations = [...this.state.currNominations, nomination];
      this.setState({...this.state,
        currNominations: newNominations,
        confetti: true,
        notif: false,
      });
      // alert & confetti
    } else if (this.state.currNominations.length < 4) {
      let newNominations = [...this.state.currNominations, nomination];
      this.setState({...this.state,
        currNominations: newNominations,
        confetti: false,
        notif: false,
      });
    } else {
      debugger;
      this.setState({ ...this.state,notif: true });
    }
  };

  closeAlert = () => {
    this.setState({...this.state,
      notif: false,
    });
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
    this.setState({ ...this.state,currNominations: newNominations, selectedMovie: {} });
  };

  changePage = (symbol) => {
    if (symbol === "+" && this.state.startPage + 3 < this.state.numPages) {
      let newPage = parseInt(this.state.startPage) + 3;
      this.setState({ ...this.state,startPage: newPage });
    } else if (symbol === "-" && this.state.startPage > 3) {
      let newPage = parseInt(this.state.startPage) - 3;
      this.setState({ ...this.state,startPage: newPage });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          {this.state.notif === true && <Alert closeAlert={this.closeAlert}/>}
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
            movies={this.state.currRecords}
            addToNominations={this.addToNominations}
            currNominations={this.state.currNominations}
            removeNomination={this.removeNomination}
          />
          <div style={{ marginTop: 400 }}>
            <Footer />
          </div>
        </header>
      </div>
    );
  }
}

export default App;


