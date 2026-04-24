import { useState } from "react";

function Login({ onLogin }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const submit = () => {
    onLogin({ name, address });
  };

  return (
    <div>
      <h2>Login</h2>
      <input 
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        placeholder="Address"
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={submit}>Login</button>
    </div>
  );
}

export default Login;