import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Live from "./components/Live";

function App() {
  return (
    <div className="main">
      <Router>
          <Switch>
              <Route path="/live/:id">
                  <Live />
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
