import React from "react";
import Sidebar from "./Sidebar";
import "./App.css";
import Chat from "./Chat";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function App() {
  // const [user, setUser] = useState(null); before useStateValue
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>

              <Route path="/">
                <h2>home</h2>
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;

// when: commit>>> "add: set up react-router-dom"
// what: <Chat /> is not appreared in all place. Only <Sidebar /> is seen.
// why: Because of the scope of react-router-dom. The Component that is commonly applied should be put under the <Router />.

// thoughts: I expected the problem comes from state or firestore, but it was besides the point. But it deepened my understandings well, to try to find out what caused.
