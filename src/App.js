import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,  Route } from "react-router-dom";
import About from './components/About.js';
import Login from './components/pages/Login.js';
import Register from './components/pages/Register.js';
import ProtectedRoute from './components/ProtectedRoute.js';
import Home from './components/pages/Home.js';

function App() {
  
  return (
    <BrowserRouter>
      
          <ProtectedRoute path="/" exact component={Home} />
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/about" component={About}/>
      
    </BrowserRouter>
  );
}




export default (App);
