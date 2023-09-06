import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Home";
import SignInCustomer from "./pages/customers/SignIn";
import SignupCustomer from "./pages/customers/Signup";
import SignInAgent from './pages/agents/Signin'
import SignupAgent from "./pages/agents/SingUp";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/logincustomer" exact element={<SignInCustomer />} />
        <Route path="/customersignup" exact element={<SignupCustomer/>} />
        <Route path="/loginagent" exact element={<SignInAgent/>} />
        <Route path="/agentsignup" exact element={<SignupAgent/>} />


      </Routes>
    </Router>
  );
}

export default App;
