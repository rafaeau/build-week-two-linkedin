import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header"
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from "./views/Homepage";
import ProfileExperiences from "./views/ProfileExperiences";


function App() {
  return (
    <>
    <BrowserRouter>
        <Header />
      <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route exact path='/profile/:userId/experiences' element={<ProfileExperiences/>} />
      </Routes>
        <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
