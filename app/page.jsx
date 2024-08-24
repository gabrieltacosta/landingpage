import Header from "@/components/header/page";
import styles from "./page.module.scss";

export default function Home() {
  return (
      <div className={styles.container}>
        <Header />
      </div>
  );
}
