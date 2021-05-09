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
    alert: false,
    numPages: 1
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
    this.setState({
      startPage: num
    })
  }

  handleChange = (e) => {
    let new_title = e.target.value;
    this.setState({
      title: new_title,
      startPage: 1
    });
  };

  addToNominations = (nomination) => {
    if (this.state.currNominations.length === 4) {
      let newNominations = [...this.state.currNominations, nomination];
      this.setState({
        currNominations: newNominations,
        confetti: true,
        alert: false,
      });
      // alert & confetti
    } else if (this.state.currNominations.length < 4) {
      let newNominations = [...this.state.currNominations, nomination];
      this.setState({
        currNominations: newNominations,
        confetti: false,
        alert: false,
      });
    } else {
      this.setState({ alert: true });
    }
  };

  closeAlert = () => {
    this.setState({
      alert: false,
    });
  };

  updateSelectedMovie = (movie) => {
    this.setState({
      selectedMovie: movie,
    });
  };

  removeSelected = (movie) => {
    this.setState({ selectedMovie: {} });
  };

  removeNomination = (movie) => {
    let newNominations = this.state.currNominations.filter(
      (nom) => nom["imdbID"] !== movie["imdbID"]
    );
    this.setState({ currNominations: newNominations, selectedMovie: {} });
  };

  changePage = (symbol) => {
    if (symbol === "+" && this.state.startPage + 3 < this.state.numPages ) {
      let newPage = parseInt(this.state.startPage) + 3;
      this.setState({ startPage: newPage });
    } else if (symbol === "-" && this.state.startPage > 3) {
      let newPage = parseInt(this.state.startPage) - 3;
      this.setState({ startPage: newPage });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          {this.state.confetti && <Message />}
          {this.state.alert && <Alert />}
          <h6 style={{ marginTop: 65, fontWeight: "lighter" }}>
            Your Nominations
          </h6>
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
            changePageNum = {this.changePageNum}
          />
          <SearchMovies
            movies={this.state.currRecords}
            addToNominations={this.addToNominations}
            currNominations={this.state.currNominations}
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

