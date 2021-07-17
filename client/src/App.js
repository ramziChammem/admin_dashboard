import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import ShopList from "./pages/ShopList/ShopList";
import Shop from "./pages/shop/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.css";
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
          <Route exact path="/users/:userId">
            <User />
          </Route>
          <Route exact path="/shops">
            <ShopList />
          </Route>
          <Route exact path="/shops/:shopId">
            <Shop />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
