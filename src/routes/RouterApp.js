import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from '../components/organisms/Navbar';
import Footer from '../components/organisms/Footer';
import Home from '../pages/home/Home';
import Projects from '../pages/projects/Projects';
import Contact from '../pages/contact/Contact';

export const RouterApp = () => {
    return (
        <Router>
            <div>
                <Navbar />

                <main>
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
                </main>

                <Footer />
            </div>
        </Router>
    );
};
