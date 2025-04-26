import { useToggle2 } from "./toggle2";

export function DarkModeToggle() {
  const { theme, btnTheme, handleThemeChange } = useToggle2();

  return (
    <div 
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        height: '100vh',
        transition: 'background-color 0.5s ease',
        backgroundColor: theme.includes('bg-dark') ? '#121212' : '#ffffff',
        
      }}
    >
      <form className={`border border-2 p-4 rounded ${theme}`} style={{ transition: 'all 0.5s ease' }}>
        <div className="form-switch">
          <input type="checkbox" onChange={handleThemeChange} className="form-check-input" /> 
          <label className="form-check-label">Dark Mode</label>
        </div>
        <h3 className="bi bi-person-fill"> User Login </h3>
        <dl>
          <dt>User Name</dt>
          <dd><input type="text" className="form-control" /></dd>
          <dt>Password</dt>
          <dd><input type="password" className="form-control" /></dd>
        </dl>
        <br />
        <button className={`btn w-100 ${btnTheme}`}>Login</button>
      </form>
    </div>
  );
}
