import Navbar from './Navbar';
import Home from "./Home";
import MyWork from "./Mywork";
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';




function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/home">
            <Home />
            <MyWork />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route>
            <Contact />
          </Route>
        </Switch>
      </div>
    <Footer />
    </div>
    </Router>
  );
}

export default App;