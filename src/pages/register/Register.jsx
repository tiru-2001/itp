import "./register.scss";
import { useState } from "react";
import configuredUrl from "../../utils/request/request";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);

  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let er = "";
      if (!passwordRegex.test(password)) {
        er =
          "password must contain at least one lowercase letter ,uppercase letter,one digit,one special characters and the lenght should be eight";
      }
      if (phone.length < 10) {
        er += "phone must be at least 10 characters";
      }
      if (er.length) {
        console.log("hi");
        setError(er);
        return;
      }

      let { data } = await configuredUrl.post("/auth/register", {
        username: name,
        password,
        email,
        phone,
      });
      console.log(data);
      if (data.success) {
        setError("");
        toast.success(data.message);
        navigate("/login");
      } else {
        setError(data.message);
      }
    } catch (e) {
      let { response } = e;
      setError(response.data.message);
    }
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
                  required
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Enter the name"
                  id="name"
                  type="text"
                  value={name}
                />

                <input
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter the email"
                  id="email"
                  type="email"
                  value={email}
                />

                <input
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Enter the password"
                  id="pass"
                  type="password"
                  value={password}
                />

                <input
                  required
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  placeholder="Enter the number"
                  id="phone"
                  type="number"
                  value={phone}
                />

                {error && <section style={{ color: "red" }}>{error}</section>}
                <Link to={"/login"}>
                  if you already registered then click to login
                </Link>

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
