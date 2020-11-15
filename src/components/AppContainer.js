import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Docs from './Docs';
import NotFoundPage from './NotFoundPage';
import Navigation from './Navigation';
import Features from './Features';
import Footer from './Footer';

const AppContainer = () => {
    return (
        <Router>
        <div>
            <Navigation />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/features" component={Features} />
                <Route path="/docs" component={Docs} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </div>
      </Router>
    )
}

export default AppContainer;
