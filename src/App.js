import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Footer from './Components/Footer/Footer'
import ContactUs from './Components/ContactUs/ContactUs'
import HelpADog from './Components/HelpADog/HelpADog'
import Donate from './Components/Donate/Donate'
import Goals from './Components/Goals/Goals'
import OurDogs from './Components/OurDogs/OurDogs'

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/helpadog" element={<HelpADog />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/ourdogs" element={<OurDogs />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
