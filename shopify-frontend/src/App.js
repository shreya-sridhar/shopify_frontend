import './App.css';
import SearchBar from './components/SearchBar.js';
import SearchMovies from './containers/SearchMovies';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Shoppies!
        </p>
        <SearchBar/>
        <SearchMovies/>
      </header>
    </div>
  );
}

export default App;



