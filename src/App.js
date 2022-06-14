import {BrowserRouter as Router, Routes, Route } from  "react-router-dom";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Users from "./views/Users";
import Logout from "./views/Logout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Login/>} />
        <Route path = "/logout" element = {<Logout/>} />
        <Route path = "/signup" element = {<Signup/>} />
        <Route path = "/users" element = {<Users/>} />
      </Routes>
    </Router>
  );
}
export default App;
