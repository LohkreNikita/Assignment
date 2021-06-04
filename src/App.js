import logo from "./logo.svg";
import "./App.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Welcome from "./Welcome";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={SignUp} exact={true} />
        <Route path='/signIn' component={SignIn} exact={true} />
        <Route path='/welcome' component={Welcome} exact={true} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
