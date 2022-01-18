import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Central from "./Central";
import Sidebar from './Components/Sidebar';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header"
import Footer from "./Components/Footer";


function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <div className='row mt-4'>
          <div className='col-9 ml-n5'>
            <Central className='' />
          </div>
          <div className='col-2'>
            <Sidebar />
          </div>
        </div>
      </div>
              
      <Footer/>
    </>
  );
}

export default App;
