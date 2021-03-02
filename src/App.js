import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from './components/organisms/Footer';
import Navbar from './components/organisms/Navbar';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';

function App() {
    return (
        <Router>
            <div>
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
                
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
