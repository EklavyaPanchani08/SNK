import React from 'react'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Footer from '../components/Footer'
import About from '../pages/About';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Home from '../pages/Home'
import Vegetables from '../pages/Vegetables';
import Fruites from '../pages/Fruites';

const Routes = () => {

  return (
    <>
    <Router>
        <Switch>
            <Route exact path="/"><Home/></Route>
            <Route exact path="/about-us"><About/></Route>
            <Route exact path="/contact-us"><Contact/></Route>
            <Route exact path="/blog"><Blog/></Route>
            <Route exact path="/product/vegetables"><Vegetables/></Route>
            <Route exact path="/product/fruits"><Fruites/></Route>
        </Switch>
    </Router>
    <Footer/>
    </>
  )
}

export default Routes
