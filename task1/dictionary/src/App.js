import './App.css';
import './style/style.css';
import Definitions from './components/Definitions';
import Favorites from './components/Favorites';

function App() {
  return (
    <div className='App'>
      <header className="App-header">
        <h1>
            Word Definitions
        </h1>
      </header>
      <main>
        <div className='container'>
            <Definitions/>
            <Favorites/>
        </div>
      </main>
    </div>
  );
}

export default App;
