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
import GenerateLink from "./components/GenerateLink";
import React from "react";
import {Interpolator} from 'react-apply-darkmode';
import base64 from 'react-native-base64';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { withRouter } from "react-router";

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
    link: "",
    visible: false
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

  componentDidMount() {
    fetch(
      `https://www.omdbapi.com/?i=${localStorage.getItem['movie_1']}&apikey=41227138`
    )
      .then((resp) => resp.json())
      .then((data1) => fetch(
        `https://www.omdbapi.com/?i=${localStorage.getItem['movie_2']}&apikey=41227138`
      )
        .then((resp) => resp.json())
        .then((data2) => fetch(
          `https://www.omdbapi.com/?i=${localStorage.getItem['movie_3']}&apikey=41227138`
        )
          .then((resp) => resp.json())
          .then((data3) => fetch(
            `https://www.omdbapi.com/?i=${localStorage.getItem['movie_4']}&apikey=41227138`
          )
            .then((resp) => resp.json())
            .then((data4) => fetch(
              `https://www.omdbapi.com/?i=${localStorage.getItem['movie_5']}&apikey=41227138`
            )
              .then((resp) => resp.json())
              .then((data5) => this.setState({ ...this.state,currNominations: [data1,data2,data3,data4,data5] }))))))
  }

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

  addToNominations = async(nomination) => {
    if (this.state.currNominations.length === 4) {
      let newNominations = [...this.state.currNominations, nomination];
      await this.setState({...this.state,
        currNominations: newNominations,
        ribbon: true,
        notif: false,
      });
      debugger
      localStorage.setItem('movie_5', nomination["imdbID"]);
    } else if (this.state.currNominations.length < 4) {
      let newNominations = [...this.state.currNominations, nomination];
      await this.setState({...this.state,
        currNominations: newNominations,
        ribbon: false,
        notif: false,
      });
      localStorage.setItem("movie_4", nomination["imdbID"]);
      if (this.state.currNominations.length === 1)
        {
          localStorage.setItem("movie_1", nomination["imdbID"]);
        }
      else if (this.state.currNominations.length === 2)
      {
        localStorage.setItem("movie_2", nomination["imdbID"]);
      }
      else if (this.state.currNominations.length === 3)
      {
        localStorage.setItem("movie_3", nomination["imdbID"]);
      }
    } else {
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
      this.setState({...this.state,
        currMovies: movies["Search"],
        numPages: Math.ceil(parseInt(movies["totalResults"]) / 10),
      }); // fetched movies
    });
    }
  };

  makeLink = () => {
    let ids = this.state.currNominations.map((movie) => movie["imdbID"])
    let en = base64.encode(ids.join('-'))
    this.setState({...this.state,link: en,visible:true})
  }

  hideLink = () => {
    this.setState({...this.state,visible: false });
  }

  render() {
    return (
      <Interpolator
      appearance='dark'
      watchSystem={false}
      filter={{brightness: 100, contrast:100, sepia: 20}}>
      <div className="App">
          <Switch>
          <Route
            path="/share/:slug"
            render={(routerProps) => {
              return (
                <SharePage movies={base64.decode(routerProps.match.params.slug).split("-")} />
              );
            }}
          />
          <header className="App-header">
          <Header makeLink={this.makeLink}/>
          {this.state.notif === true && 
          <Rodal/>
          }
          <GenerateLink link={this.state.link} visible={this.state.visible} hideLink={this.hideLink}/>
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
          </header>
          </Switch>
          <div style={{ marginTop: 400 }}>
            <Footer />
          </div>
      </div>
      </Interpolator>
    );
  }
}

export default withRouter(App);


