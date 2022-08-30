import { useState } from "react";
import Input from "./components/Input";
import "./index.css";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="inputContainer">
      <h1>Desafío 2, Estado de los componentes y eventos</h1>
      <Input
        name={name}
        setName={setName}
        password={password}
        setPassword={setPassword}
      />
    </div>
  );
}

export default App;
