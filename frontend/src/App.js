import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route/>
      <Route/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
