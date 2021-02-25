import './App.css';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LoginNSignup />
        </Route>
        <Route path="/dashboard"></Route>
        <Route> </Route>
      </Switch>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
