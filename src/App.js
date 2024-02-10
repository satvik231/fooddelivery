
import './App.css';
import Body from './Component/Body';
// import Cardcontainer from './Component/Cardcontainer';
// import Filter from './Component/Filter';
import Footer from './Component/Footer';
import Header from './Component/Header';
// import Restaurantcard from './Component/Restaurantcard';
// import Searchbar from './Component/Searchbar';
function App() {
  return (
    <div className="App">
      {/* <header classNameName="App-header">
        <img src={logo} classNameName="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          classNameName="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header/>
      <Body/>
      {/* <Searchbar/>
      <Filter/>
      <Cardcontainer/>
      <Restaurantcard/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
