import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss";
const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const handleLogin = () => {};
  return (
    <section>
      <div className="app__login-container">
        <div className="app__login-subcontainer">
          <div className="left">
            <div className="title-container">
              <h1 className="main_heading">Welcome back !</h1>
              <p>You can sign in to access with your existing profile</p>
            </div>
          </div>
          <div className="right">
            <div className="app__right-subContainer">
              <div className="app__sign-title">
                <h1>Sign In</h1>
                <p>
                  Please enter your login information or click here to
                  registration
                </p>
              </div>
              <div className="app__form">
                <form className="form-container">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Enter your email"
                  />
                  <input
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="Enter your password"
                    type="password"
                  />
                </form>
              </div>

              <div className="btn-container">
                <button onClick={handleLogin} className="btn">
                  log In
                </button>
              </div>
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
              {error && <div style={{ color: "red" }}>{error}</div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
