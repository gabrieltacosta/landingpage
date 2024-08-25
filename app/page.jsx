import Header from "@/components/header/page";
import Welcome from "@/components/welcome/page";
import Features from "@/components/features/page";
import Contato from "@/components/contato/page";
import styles from "./page.module.scss";

export default function Home() {
  return (
      <div className={styles.container}>
        <Header />
        <Welcome />
        <Features />
        <Contato />
      </div>
  );
}
