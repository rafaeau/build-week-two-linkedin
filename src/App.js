import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Ad from './components/Ad';
import LanguageBar from './components/LanguageBar';
import PeopleAlsoViewed from './components/PeopleAlsoViewed';

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-8 mt-4'>

        </div>
        <div className='col-2 mt-4'>
          <LanguageBar/>
          <Ad/>
          <PeopleAlsoViewed/>
        </div>
      </div>
    </div>
  );
}

export default App;
