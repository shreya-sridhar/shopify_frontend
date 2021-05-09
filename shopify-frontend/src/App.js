import './App.css';
import SearchBar from './components/SearchBar.js';
import Pagination from './components/Pagination.js';
import SearchMovies from './containers/SearchMovies';
import CardDeck from './containers/CardDeck';
import data from './data/data';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <CardDeck />
        <SearchBar/>
        <Pagination/>
        <SearchMovies movies = {data}/>
        <Footer />
      </header>
    </div>
  );
}

export default App;



