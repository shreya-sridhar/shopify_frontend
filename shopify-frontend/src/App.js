import './App.css';
import SearchBar from './components/SearchBar.js';
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
        <SearchMovies movies = {data}/>
      </header>
    </div>
  );
}

export default App;



