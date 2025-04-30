import { useLocalStorage } from "./uselocalstorage";

export function LocalStorageDemo() {
  const [name, setName] = useLocalStorage("username", "");

  return (
    <div className="container text-center mt-5">
      <h1>Hello, {name || "Guest"}</h1>
      <input 
        type="text" 
        className="form-control my-3" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
}
