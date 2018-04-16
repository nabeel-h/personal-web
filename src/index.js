import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Index from './views/Index';
import Resume from './views/Resume';
import Contact from './views/Contact';
import Projects from './views/Projects';
import About from './views/About';

import NotFound from './views/NotFound';



ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/resume" exact component={Resume} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/about" exact component={About} />

            <Route component={NotFound} status={404} />
        </Switch>
    </Router>,
    document.getElementById('root')
);



