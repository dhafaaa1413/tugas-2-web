import { useParams, Link } from "react-router-dom";
import dataBarang from "../Data/Barang";
import NotFound from "./NotFound";
import styles from "./Barang.module.css";

export default function DetailBarang() {
  const { id } = useParams();
  const idAngka = Number(id);
  const valid = Number.isInteger(idAngka) && idAngka > 0;
  const item = valid ? dataBarang.find((b) => b.id === idAngka) : null;

  if (!item) return <NotFound />;

  return (
    <div>
      <h1 className={styles.title}>{item.nama}</h1>
      <p>Harga: Rp {item.harga.toLocaleString("id-ID")}</p>
      <p>{item.deskripsi}</p>
      <Link to="/barang" className={styles.back}>
        Kembali ke daftar barang
      </Link>
    </div>
  );
}