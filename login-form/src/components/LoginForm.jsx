import { useState } from "react";
import "./LoginForm.css";
export function LoginForm() {
  const [showPassword, setShowPassword] = useState(true);

  function switchPassword() {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  }
  return (
    <div>
      <div>
        <input placeholder="Email" type="text" className="input-text" />
        <div className="input-password">
          <input
            placeholder="password"
            className="input-text"
            type={showPassword ? "password" : "text"}
          />
          <button className="show-password" onClick={switchPassword}>
            {showPassword ? "show" : "Hide"}
          </button>
        </div>
      </div>

      <div className="buttonIn">
        <button className="buttonReg">Login</button>
        <button className="buttonReg">Sign up</button>
      </div>
    </div>
  );
}

console.log("");
