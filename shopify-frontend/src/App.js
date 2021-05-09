import './App.css';
import SearchBar from './components/SearchBar.js';
import Pagination from './components/Pagination.js';
import SearchMovies from './containers/SearchMovies';
import data from './data/data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Shoppies!
        </p>
        <SearchBar/>
        <Pagination/>
        <SearchMovies movies = {data}/>
      </header>
    </div>
  );
}

export default App;



