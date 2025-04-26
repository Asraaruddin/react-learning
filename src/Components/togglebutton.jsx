import { useToggle } from "./usetoggle";

export function ToggleButton() {
  const { value, toggle } = useToggle();

  return (
    <div className="container-fluid">
    { value && <p>This is the hidden text you can now see! </p> }
      <button className="btn btn-primary" onClick={toggle}>
          {value ? "Hide" : "Show"}
     
      </button>
    </div>
  );
}
