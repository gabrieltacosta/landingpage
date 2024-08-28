import Header from "@/components/header/page";
import Welcome from "@/components/welcome/page";
import Features from "@/components/features/page";
import Contato from "@/components/contato/page";
import styles from "./page.module.scss";
import Footer from "@/components/footer/page";

export default function Home() {
  return (
      <div className={styles.container}>
        <Header />
        <Welcome />
        <Features />
        <Contato />
        {/*<Footer />*/}
      </div>
  );
}
