Build a simple multi-page application using React Router.
npm install react-router-dom 

import React from "react"
const Home=()=>{
    return(
        <div>
            <span>This is a Home page</span>
        </div>
    )
}
export default Home;


const About=()=>{
    return(
        <div>
            <span>This is an about page</span>
        </div>
    )
}
export default About;

import React from "react";
import Home from './Home';
import About from './About';
import {BrowserRouter as Router,Route,Link} from react-router-dom;
const App=()=>{
    <Router>
        <div>
            <nav>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/about">About</Link>
                </li>
            </nav>
        </div>

        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
    </Router>
}
export default App;