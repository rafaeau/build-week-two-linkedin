import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header"
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from "./views/Profile";
import ProfileExperiences from "./views/ProfileExperiences";


function App() {
  return (
    <>
    <BrowserRouter>
        <Header />
      <Routes>
        <Route exact path='/' element={<Profile/>} />
        <Route exact path='/profile/:userId/experiences' element={<ProfileExperiences/>} />
      </Routes>
        <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
