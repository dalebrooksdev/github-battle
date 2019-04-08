const React = require('react');
const ReactRouter = require('react-router-dom');
const Popular = require('./Popular');

const Router = ReactRouter.BrowserRouter;
const { Route } = ReactRouter;
const { Switch } = ReactRouter;

const Nav = require('./Nav');
const Home = require('./Home');
const Battle = require('./Battle');
const Results = require('./Results');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route path="/popular" component={Popular} />
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
            <Route exact path="/battle/results" component={Results} />
            <Route
              render={function() {
                return <p>Not Found</p>;
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

module.exports = App;
