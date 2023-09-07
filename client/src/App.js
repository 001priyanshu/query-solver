import { Routes,Route } from "react-router-dom";
import Landing from "./pages/Home";
import SignInCustomer from "./pages/customers/SignIn";
import RaiseQuery from "./pages/customers/RaiseQuery";
import CustomerChatbox from "./pages/customers/ChatBox";
import SignInAgent from "./pages/agents/Signin";
import SignupCustomer from "./pages/customers/Signup";
import SignupAgent from "./pages/agents/Singup";
function App() {
  return (
      <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/logincustomer" exact element={<SignInCustomer />} />
          <Route path="/raisequery" exact element={<RaiseQuery />} />
          <Route path="/customerchatbox" exact element={<CustomerChatbox />} />
          <Route path="/loginagent" exact element={<SignInAgent/>} />
          <Route path="/customersignup" exact element={<SignupCustomer/>} />
          <Route path="/agentsignup" exact element={<SignupAgent/>} />
      </Routes>
  );
}

export default App;
