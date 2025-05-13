import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '1rem' }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/user/42">User</Link>
      <Link to="/contact/">Contact</Link>
    
    </nav>
  );
}
