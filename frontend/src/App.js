import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import Project from './components/pages/Project';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Header from './components/layout/Header';
import FloatingActions from './components/shared/FloatingActions';

function App() {
  return (
    <Router>
      <main>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/project' component={Project} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/about' component={About} />
        </Switch>
        <FloatingActions />
      </main>
    </Router>
  );
}

export default App;
