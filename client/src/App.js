import './App.css';
import {Switch, Route} from 'react-router-dom';
import LoginNSignup  from './components/LoginNSignup';
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
    </div>
  );
}

export default App;
