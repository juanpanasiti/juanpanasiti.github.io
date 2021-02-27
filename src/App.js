import { Typography } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navbar from './components/organisms/Navbar';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';

function App() {
    return (
        <Router>
            <div className='App'>
                <Navbar />

                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route exact path='/projects'>
                        <Projects />
                    </Route>
                    <Route exact path='/contact'>
                        <Contact />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
