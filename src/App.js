import logo from './logo.svg';
import './App.css';

//api number
const api = {
  key: "c3075aa0dcec8bd643bcd3307b19c1f2",
  base: "https://api.openweathermap.org/data/2.5"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="search.." />
        </div>
      </main>
    </div>
  );
}

export default App;
