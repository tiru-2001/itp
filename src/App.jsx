import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Parent, Home, Register } from "./pages";
import { Booking } from "./components/index";



const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Parent />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="booking" element={<Booking />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
