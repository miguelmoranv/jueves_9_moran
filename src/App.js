import './App.css';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import logo from './carpeta/logo.webp';
import profesional from './carpeta/profesional.jpg';
import Example from './components/Example';
import GoogleMap from './components/GoogleMap';
import Curriculum from './components/Curriculum';
import Home from './components/Home';
import Mockup from './components/Mockup';
import Login from './components/Login';
import Logout from './components/Logout';


function App() {
  return (
    <Router>
      <div className="mt-5">    
        <div className="btn-group">
        <Link to="/Inicio" className="btn btn-dark">
          Inicio
         </Link>   
          <Link to="/Cv" className="btn btn-dark">
          Curriculum
         </Link>    
         <Link to="/GoogleMaps" className="btn btn-dark">
          GoogleMap
         </Link>
         <Link to="/Galeria" className="btn btn-dark">
          Galeria
         </Link> 
         <Link to="/Mockup" className="btn btn-dark">
          Mockup
         </Link>  
         <Link to="/Login" className='btn btn-dark'>
         Login
         </Link>  
         <Link to="/Logout" className='btn btn-dark'>
         Logout
         </Link>   
        </div>
         <hr/>
          <Switch>
          <Route path="/Inicio">
            <Home/>
           </Route> 
            <Route path="/Cv">
             <Curriculum /> 
           </Route> 
           <Route path="/GoogleMaps">
            <GoogleMap />
           </Route> 
           <Route path="/Galeria">
            <Example />
           </Route> 
           <Route path="/Mockup">
            <Mockup />
           </Route> 
           <Route path="/Login">
            <Login />
           </Route>     
           <Route path="/Logout">
            <Logout />
           </Route>   
          </Switch>
    </div>    
   </Router>
  );
}

export default App;
