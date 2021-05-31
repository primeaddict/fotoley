import Landing from "./pages/LandingPage";
import Profile from "./pages/ProfilePage";
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
function App() {

  return (
    <Router >
      <Switch>
        <Route exact path='/profile/:artist_type_url/:city_url/:vendor_page_url' component={Profile} />
        <Route exact path='' component={Landing} />
        <Route render={() => <div>404 | Page Not Found</div>} />
      </Switch>
    </Router>
  );
}

export default App;
