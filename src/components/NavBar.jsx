import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="navbar flex items-center justify-between bg-amber-50 p-2">
      <div className="nav-brand">
        <Link to="/">OURS</Link>
      </div>

      <div className="nav-link-pages flex gap-4 text-sm">
        <Link to="/">Home</Link>
        <Link to="Products">Products</Link>
      </div>
      <div className="nav-link-auths flex gap-2 text-sm">
        <Link to="/checkout">Cart</Link>
        <Link to="/auth">Login</Link>
        <Link to="/auth">Signup</Link>
      </div>
    </nav>
  );
}
