import { React, BrowserRouter as Router, Switch, Route } from 'libraries';
import { appRoutes } from 'routes';

const App = () => {
  return (
    <Router>
      <Switch>
        {appRoutes.map(route => <Route {...route} />)}
        {/* use userRoutes optionally */}
      </Switch>
    </Router>
  );
}

export default App;
