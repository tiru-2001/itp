import "./register.scss";
import { useState } from "react";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    console.log("Register");
  };

  return (
    <section className="app__register-container">
      <section className="app__register-subcontainer">
        <section className="left">
          <section className="app__left-subcontainer">
            <section className="app__signup-title">
              <h1 className="main_heading">Sign up</h1>
              <p>Please enter your login information to register</p>
            </section>
            <section className="app__form">
              <form onSubmit={handleSubmit} className="form-container">
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Enter the name"
                  id="name"
                  type="text"
                  value={name}
                />

                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter the email"
                  id="email"
                  type="email"
                  value={email}
                />

                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Enter the password"
                  id="pass"
                  type="password"
                  value={password}
                />

                <input
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  placeholder="Enter the number"
                  id="phone"
                  type="number"
                  value={phone}
                />

                {error && <section style={{ color: "red" }}>{error}</section>}

                <section className="btn_container">
                  <button type="submit" className="btn">
                    Sign Up
                  </button>

                  <a
                    href="https://buy.stripe.com/test_6oE9CD8gVahp9gs4gh"
                    className="subscribe btn"
                    target="_blank"
                  >
                    Subscribe
                  </a>
                </section>
              </form>
            </section>
          </section>
        </section>
        <section className="right">
          <section className="title-container">
            <h1 className="main_heading">Hello & Welcome!</h1>
            <p>Service Recommendation System!</p>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Register;
