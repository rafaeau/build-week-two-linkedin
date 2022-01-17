import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header";
import Central from "./Central";
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <div className='row'>
          <div className='col-8 mt-4'>
            <Central />
          </div>
          <div className='col-2 mt-4'>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
