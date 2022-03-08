import { Button_styled } from "./Button_styled";
import { useState } from "react";

function LoginBar() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <div class="child float-child">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="input"
          class="form__field"
          placeholder="email"
          required
        />
      </div>
      <div class="child float-child">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="input"
          class="form__field"
          placeholder="password"
          required
        />
      </div>
      <div class="child float-child">
        <Button_styled>Load Tasks</Button_styled>
      </div>
    </div>
  );
}
export default LoginBar;
