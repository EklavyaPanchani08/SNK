import React from 'react'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Banner from '../components/Banner';
import Footer from '../components/Footer'
import About from '../pages/About';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Gallery from '../pages/Gallery';
import Home from '../pages/Home'

const Routes = () => {
  return (
    <>
    <Router>
        <Switch>
            <Route exact path="/"><Home/></Route>
            <Route exact path="/about-us"><About/></Route>
            <Route exact path="/contact-us"><Contact/></Route>
            <Route exact path="/gallery"><Gallery/></Route>
            <Route exact path="/blog"><Blog/></Route>
        </Switch>
    </Router>
    <Footer/>
    </>
  )
}

export default Routes
