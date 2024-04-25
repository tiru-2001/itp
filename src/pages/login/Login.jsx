import { useContext, useState } from "react";
<<<<<<< HEAD
import { Link, json } from "react-router-dom";
=======
import { Link } from "react-router-dom";
>>>>>>> 0879892d63fa5b732f63e4269a65f3ff971664b1
import "./login.scss";
import { toast } from "react-toastify";
import configuredUrl from "../../utils/request/request";
import { useNavigate } from "react-router-dom";
import { usestate } from "../../statemanagement/UseAuth";
import { useLocation } from "react-router-dom";
const Login = () => {
  const location = useLocation();
  const { setUser } = useContext(usestate);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const { data } = await configuredUrl.post("/auth/login", {
        password,
        email,
      });
      console.log(data);
      if (data.success) {
<<<<<<< HEAD
        toast.success("user successfully logged in you can book therapist");
        localStorage.setItem(
          "user",
          JSON.stringify({ user: data.username, isAdmin: data.isAdmin })
        );
        console.log(localStorage.getItem("user"));
        console.log(JSON.parse(localStorage.getItem("user")));
        setUser(JSON.parse(localStorage.getItem("user")));
        if (location.state && location.state.from) {
          navigate(location.state.from);
        } else {
          navigate("/");
        }
=======
        toast.success(data.message);
        localStorage.setItem("user", data.user);
        setUser(localStorage.getItem("user"));
        navigate("/");
        // if (location.state && location.state.from) {
        //   // Redirect to the previous page
        //   navigate(location.state.from);
        // } else {
        //   // If no state or no 'from' in state, redirect to home page
        //   navigate("/");
        // }
>>>>>>> 0879892d63fa5b732f63e4269a65f3ff971664b1
      }
    } catch (e) {
      console.log(e);
      setError(e.response.data.message);
      toast.error(e.response.data.message);
    }
  };
<<<<<<< HEAD
  console.log(localStorage.getItem("user"));
  console.log(JSON.parse(localStorage.getItem("user")));
=======
>>>>>>> 0879892d63fa5b732f63e4269a65f3ff971664b1
  return (
    <section>
      <section className="app__login-container">
        <section className="app__login-subcontainer">
          <section className="left">
            <section className="title-container">
              <h1 className="main_heading">Welcome back !</h1>
              <p>You can sign in to access with your existing profile</p>
            </section>
          </section>
          <section className="right">
            <section className="app__right-subContainer">
              <section className="app__sign-title">
                <h1>Sign In</h1>
                <p>
                  Please enter your login information or click here to
                  registration
                </p>
              </section>
              <section className="app__form">
                <form className="form-container">
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => {
<<<<<<< HEAD
                      console.log(e.target.value);
=======
>>>>>>> 0879892d63fa5b732f63e4269a65f3ff971664b1
                      setEmail(e.target.value);
                    }}
                    placeholder="Enter your email"
                  />
                  <input
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="Enter your password"
                    type="password"
                  />
                </form>
              </section>

              <section className="btn-container">
                <button onClick={handleLogin} className="btn">
                  log In
                </button>
              </section>
              <Link
                to="/register"
                style={{
                  color: "dodgerblue",
                  textDecoration: "underline",
                  fontWeight: "400",
                }}
              >
                If you are not registered then click the link below to register
              </Link>
              {error && <section style={{ color: "red" }}>{error}</section>}
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Login;
