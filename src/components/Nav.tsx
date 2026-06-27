import { Link, useNavigate } from "react-router";

export default function Nav() {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
      <button onClick={() => navigate("/")}>Go Home</button>
      <button onClick={() => navigate("/about")}>Go About</button>
      {/* Link works too, if you prefer declarative navigation */}
      <Link to="/">Home Link</Link>
      <Link to="/about">About Link</Link>
    </div>
  );
}
