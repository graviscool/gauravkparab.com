import Card from "react-bootstrap/Card";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={`me-2 ${styles.footerCopyright}`}>&copy; 2024 Gaurav Parab</p>
    </footer>
  );
}
