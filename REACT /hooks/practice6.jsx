Describe how you would implement client-side routing in a React application.

npm install react-router-dom


function App(){
    return(
        <Router>
            <nav>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </nav>

            <Route path="/" component={Home}/>
            <Route path="/about" component={about}/>
        </Router>
    )
}
export default App;

We can implement client side routing using react-router 

function App(){
    return(
        <Router>
            <nav>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/about">About</Link>
                </li>
            </nav>

            <Route path="/">{Home}</Route>
            <Route path="/about">{About}</Route>
        </Router>
    )
}
export default App;

function Home(){
    return(
        <div>
            <span>This is a  home component</span>
        </div>
    )
}
export default Home;
function About(){
    return(
        <div>
            <span>This is a about component</span>
        </div>
    )
}
export default About;