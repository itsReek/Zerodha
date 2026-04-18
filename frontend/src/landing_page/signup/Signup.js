import { useState } from "react";
import "./Signup.css";

const API = "http://localhost:3002";

function Signup() {
  const [isLogin, setIsLogin] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    if (!form.name || !form.email || !form.phone || !form.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch(`${API}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.text();

      if (data === "User already exists") {
        alert("User already registered, please login");
        setIsLogin(true);
        return;
      }

      if (data === "Signup successful") {
        const loginRes = await fetch(`${API}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: form.email,
            password: form.password,
          }),
        });

        const loginData = await loginRes.json();

        if (!loginData.token) {
          alert("Login failed after signup");
          return;
        }

        localStorage.setItem("token", loginData.token);
        window.location.replace("http://localhost:3001");
      }
    } catch {
      alert("Signup failed");
    }
  };

  const handleLogin = async () => {
    if (!form.email || !form.password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const res = await fetch(`${API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (!data.token) {
        alert("Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      window.location.replace("http://localhost:3001");
    } catch {
      alert("Login error");
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-left">
        <h1>Invest in your future</h1>
        <p>Join millions of users investing with confidence.</p>
      </div>

      <div className="auth-right">
        <div className="auth-card">

          <h2 className="title">
            {isLogin ? "Login" : "Create Account"}
          </h2>

          {!isLogin && (
            <>
              <input className="input-field" name="name" placeholder="Name" onChange={handleChange} />
              <input className="input-field" name="phone" placeholder="Phone" onChange={handleChange} />
            </>
          )}

          <input className="input-field" name="email" placeholder="Email" onChange={handleChange} />

          <input
            className="input-field"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <button className="primary-btn" onClick={isLogin ? handleLogin : handleSignup}>
            {isLogin ? "Login" : "Signup"}
          </button>

          <p className="toggle-text" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "New user? Create account" : "Already have an account? Login"}
          </p>

        </div>
      </div>

    </div>
  );
}

export default Signup;