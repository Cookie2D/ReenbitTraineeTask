import Chat from "./pages/Chat";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/chats" component={Chat} />
      </Switch>
    </div>
  );
}

export default App;
