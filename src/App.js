import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import PostDetail from "./Pages/PostDetails/PostDetail";

function App() {
  return (
    <Router>
      <div className="page-wrap">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/postDetails" component={PostDetail}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
