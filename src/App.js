import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from "react-router-dom"
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
     <>
     <Routes>
       <Route path="/" element={null} />
       <Route path="/signup" element={<SignUp />}/>
       <Route path="/signin" element={<SignIn />}/>
     </Routes>
   
     </>
  );
}

export default App;
