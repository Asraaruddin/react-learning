import { useToggle } from "./usetoggle";

export function ToggleComponent() {
  const { value, toggle } = useToggle();

  return (
    <div className="container-fluid">
      <h1>{value ? "ON" : "OFF"}</h1>
      <button className="btn btn-primary" onClick={toggle}>
        Toggle
      </button>
    </div>
  );
}
