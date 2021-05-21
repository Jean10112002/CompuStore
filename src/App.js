import Index from './assets/Pags/Index';
import './assets/Css/App.css';
import Contacto from './assets/Pags/Contacto';
import QuienesSomos from './assets/Pags/QuienesSomos';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'animate.css'
import Productos from './assets/Pags/Productos';
import StoreProvider from './assets/Context/StoreContext';
function App() {

  return (
    <Router>
      <Switch>
      <Route path="/" exact>
        <Index/>
     </Route>
      <Route path="/Quienes-somos" exact >
      <QuienesSomos/>
        </Route> 
      <Route path="/Contacto" exact  component={Contacto} />
      <Route path="/Productos" exact >
        <StoreProvider>
         <Productos />
        </StoreProvider>
      </Route>
      
      <Route path="*">
      <h1>Error 404</h1>
     </Route>
      </Switch>
    </Router>
  );
}

export default App;
