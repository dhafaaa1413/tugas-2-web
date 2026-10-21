import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./pages/Home";
import Barang from "./pages/Barang";
import DetailBarang from "./pages/DetailBarang";
import Tentang from "./pages/Tentang";
import Kontak from "./pages/Kontak";
import NotFound from "./pages/NotFound";

const linkClass = ({ isActive }) =>
  isActive ? `${styles.link} ${styles.active}` : styles.link;

export default function App() {
  return (
    <BrowserRouter>
      <nav className={styles.navbar}>
        <NavLink to="/" end className={linkClass}>Home</NavLink>
        <NavLink to="/barang" className={linkClass}>Barang</NavLink>
        <NavLink to="/tentang" className={linkClass}>Tentang</NavLink>
        <NavLink to="/kontak" className={linkClass}>Kontak</NavLink>
      </nav>

      <main className={styles.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/barang" element={<Barang />} />
          <Route path="/barang/:id" element={<DetailBarang />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}