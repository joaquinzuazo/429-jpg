import React, {useEffect } from 'react'
import{ BrowserRouter, Switch, Route, useLocation, withRouter } from 'react-router-dom'
import Home from './components/Home'
import Project from './components/Project'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path="/projects/:paramsProject">
            <Project />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <div>Errorrrrrrrrr</div>
          </Route>
        </Switch>
      </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
