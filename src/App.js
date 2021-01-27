import logo from './logo.svg';
import './App.css';

//api number
//base number
//commit update
//bunch of 
const api = {
  key: "c3075aa0dcec8bd643bcd3307b19c1f2",
  base: "https://api.openweathermap.org/data/2.5"
}

let f = 0;
let k = 3;

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
