import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Login,
  Parent,
  Home,
  Register,
  Private,
  Booking,
  Therapist,
  Dietician,
  Contact,
  Counseling,
  Blogs,
} from "./pages";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Parent />}>
            <Route index element={<Home />} />
            <Route path="private/*" element={<Private />}>
              <Route path="booking" element={<Booking />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="top-therapists" element={<Therapist />} />
            <Route path="dietician" element={<Dietician />} />
            <Route path="counseling" element={<Counseling />} />
            <Route path="contact-us" element={<Contact />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
