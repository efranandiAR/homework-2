import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import { useSelector } from "react-redux";
import Home from "./pages/home";
import LogIn from "./components/LogIn";

function App() {
  const currentToken = useSelector((state) => state.token.value);
  
  return (
    <Router>
      <Switch>
        <Route path="/create-playlist">
          <Home />
        </Route>
        <Route path="/">
          { currentToken ?
            <Redirect to="/create-playlist" />
            : <LogIn />
          }
        </Route>
      </Switch>
    </Router>
  );
}

export { App as RoutePages };