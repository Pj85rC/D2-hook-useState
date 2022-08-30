import Button from "./Button";

const Input = ({ name, password, setName, setPassword }) => {
  return (
    <div className="input">
      <div className="input-group">
        <label className="labels">Nombre</label>
        <input
          type="name"
          name="name"
          placeholder="Ingresa un texto"
          className="input-control"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label className="labels">Contraseña</label>
        <input
          type="password"
          name="password"
          placeholder="Ingresa una contraseña"
          className="input-control"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {password === "252525" ? <Button name={name} password={password} /> : ""}
    </div>
  );
};

export default Input;
