import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.container}>
      asd
      <Image
        className={styles.branuelImage}
        src="/images/branuel.png"
        alt="Branuel"
        width={500}
        height={653}
        quality="100"
      />
      <Image
        className={styles.flares}
        src="/images/flare.png"
        alt="Fuego"
        width={1920}
        height={1080}
      />
      <Image
        className={styles.background}
        src="/images/rocks.jpg"
        alt="Fondo de rocas"
        width={1920}
        height={1080}
      />
    </div>
  );
}
