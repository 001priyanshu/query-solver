import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Home";
import SignInCustomer from "./pages/customers/SignIn";
import SignupCustomer from "./pages/customers/Signup";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/logincustomer" exact element={<SignInCustomer />} />
        <Route path="/customersignup" exact element={<SignupCustomer/>} />


      </Routes>
    </Router>
  );
}

export default App;
