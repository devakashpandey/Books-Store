import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import NavBar from './pages/NavBar';
import About from './pages/About';
import Footer from './pages/Footer';
import Contact from './pages/Contact';
import DetailPage from './pages/DetailPage';

function App() {
  return (
     <>
     <NavBar />

     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/signup" element={<SignUp />}/>
       <Route path="/signin" element={<SignIn />}/>
       <Route path="/about" element={<About />}/>
       <Route path="/contact" element={<Contact />}/>
       <Route path="/book/view/:bookID" element={<DetailPage />}/>
    
     </Routes>

     <Footer />

   
     </>
  );
}

export default App;
