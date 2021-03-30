import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from "./views/Home/Home"
import AddProduct from "./views/AddProduct/AddProduct"
import AllProductsPage from "./views/AllProductsPage/AllProductsPage"
import Login from "./views/Login/Login"
import Message from "./views/Message/Message"
import ProductPage from "./views/ProductPage/ProductPage"
import ProfilePage from "./views/ProfilePage/ProfilePage"
import Signup from "./views/Signup/Signup"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/AddProduct' component={AddProduct}/>
      <Route path='/AllProductsPage' component={AllProductsPage}/>
      <Route path='/Login' component={Login}/>
      <Route path='/Message' component={Message}/>
      <Route path='/ProductPage' component={ProductPage}/>
      <Route path='/ProfilePage' component={ProfilePage}/>
      <Route path='/Signup' component={Signup}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
