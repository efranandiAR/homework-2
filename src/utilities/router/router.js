import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import { useSelector } from "react-redux";
import LogIn from "../../pages/LogIn";
import CreatePlaylist from "../../pages/CreatePlaylist";

function App() {
  const currentToken = useSelector((state) => state.token.value);
  
  return (
    <Router>
      <Switch>
        <Route path="/create-playlist">
          { currentToken ? 
            <CreatePlaylist /> 
            : <Redirect to="/" /> 
          }
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