
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import LikeCard from './Components/LikeCard';



import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; 


function App() {
  
  return (
    
      <Router>
       <Navbar/>
        
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/likecard" element={ <LikeCard/>}></Route>
         

        </Routes>
        
      </Router>

   
    
    
   
  );
}

export default App;
