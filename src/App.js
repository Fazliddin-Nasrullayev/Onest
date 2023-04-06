import './App.css';
import Context from './components/context/Context';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Products from './pages/Products/Products';


function App() {

  const obj = {}

  return (
    <Context.Provider value={obj}>
    <div>

          {/* <div className='black'> */}
          <Header />
          <Products />
          <Sidebar />
          {/* </div> */}
    </div>
    </Context.Provider>
  );
}

export default App;
