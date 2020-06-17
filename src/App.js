/*eslint*/
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './login/index';
import CourseMainPage from './coursemainpage/index';

function App(props) {
  return (
      <div className="App">
        <Switch>
          <Route path="/dashboard" component={CourseMainPage} />
          <Route path="/" component={Login}/>
        </Switch>     
      </div>
  );
}

export default App;
