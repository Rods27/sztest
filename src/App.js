import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Details, Calendar, Clients, Budgets, Properties, Control } from './pages';
import './styles/main.scss'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path ="/" component={ Home } />
        <Route exact path ="/calendar" component={ Calendar } />
        <Route exact path ="/clients" component={ Clients } />
        <Route exact path ="/budgets" component={ Budgets } />
        <Route exact path ="/properties" component={ Properties } />
        <Route exact path ="/properties/:id" component={ Details } />
        <Route exact path ="/control" component={ Control } />
      </Switch>
    </div>
  );
}

export default App;
