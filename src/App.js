import './App.css';
import React,{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Page/Home';
import Products from './Page/Products';
import Cart from './Page/Cart';
import Contact from './Page/Contact';
import About from './Page/About';
import HeaderSection from './HeaderSection';


function App() {
  return (
    <>
    <HeaderSection />
    <Router>
      <Switch>
        <Route exact path='/Page/Home'>
          <Home />
        </Route>
        <Route exact path='/Page/Products'>
          <Products />
        </Route>
        <Route exact path='/Page/Cart'>
          <Cart />
        </Route>
        <Route exact path='/Page/Contact'>
          <Contact />
        </Route>
        <Route exact path='/Page/About'>
          <About />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
    </>
  
  );
}

export default App;
