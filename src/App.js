import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import NavBar from './pages/NavBar';

function App() {
  return (
     <>
     <NavBar />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/signup" element={<SignUp />}/>
       <Route path="/signin" element={<SignIn />}/>
     </Routes>
   
     </>
  );
}

export default App;
