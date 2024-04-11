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
