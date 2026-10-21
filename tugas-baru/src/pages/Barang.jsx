import { Link } from "react-router-dom";
import dataBarang from "../Data/Barang";
import styles from "./Barang.module.css";

export default function Barang() {
  return (
    <div>
      <h1 className={styles.title}>Daftar Barang</h1>
      <ul className={styles.list}>
        {dataBarang.map((item) => (
          <li key={item.id} className={styles.item}>
            <Link to={`/Barang/${item.id}`} className={styles.link}>
              {item.nama}
            </Link>{" "}
            - Rp {item.harga.toLocaleString("id-ID")}
          </li>
        ))}
      </ul>
    </div>
  );
}