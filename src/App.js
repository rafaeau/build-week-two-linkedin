import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import LanguageBar from './components/LanguageBar';

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-8 mt-4'>

        </div>
        <div className='col-2 mt-4'>
          <LanguageBar/>
        </div>
      </div>
    </div>
  );
}

export default App;
