import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>404 - Halaman tidak ditemukan</h1>
      <Link to="/">Kembali ke Home</Link>
    </div>
  );
}