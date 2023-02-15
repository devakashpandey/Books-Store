import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import NavBar from './pages/NavBar';
import Footer from './pages/Footer';
import Contact from './pages/Contact';
import DetailPage from './pages/DetailPage';

function App() {
  return (
     <>
   
     <Routes>
       <Route path="/" element={<><NavBar /><Home /><Footer /></>} />
       <Route path="/signup" element={<SignUp />}/>
       <Route path="/signin" element={<SignIn />}/>
       <Route path="/contact" element={<><NavBar /><Contact /><Footer /></>}/>
       <Route path="/book/view/:bookID" element={<><NavBar /><DetailPage /><Footer /></>}/>
     </Routes>


   
     </>
  );
}

export default App;
