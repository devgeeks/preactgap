import { cloneElement, h, Children, Component } from 'preact';
import { hashHistory, Redirect, Router, Route } from 'react-router';

import Root from 'containers/Root';
import PageOne from 'containers/PageOne';
import PageTwo from 'containers/PageTwo';

// This needs to be a class to keep HMR working
class App extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Router history={ hashHistory }>
        <Route component={ Root }>
          <Route path="one" component={ PageOne } />
          <Route path="two" component={ PageTwo } />
          <Redirect from="/" to="/one" />
        </Route>
      </Router>
    );
  }
}

export default App;
