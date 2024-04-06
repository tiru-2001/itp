import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Parent, Home, Register } from "./pages";

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
        </Routes>
      </Router>
    </>
  );
};

export default App;
