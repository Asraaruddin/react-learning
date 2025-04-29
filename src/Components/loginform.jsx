import { useForm } from "./useform";

export function LoginForm() {
  const { values, handleChange, resetForm } = useForm({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${values.username}, Password: ${values.password}`);
    resetForm();
  };

  return (
    <div className="container mt-5 w-50">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          value={values.username}
          onChange={handleChange}
          className="form-control mb-3"
          placeholder="Username"
        />
        <input
          name="password"
          value={values.password}
          onChange={handleChange}
          type="password"
          className="form-control mb-3"
          placeholder="Password"
        />
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}
