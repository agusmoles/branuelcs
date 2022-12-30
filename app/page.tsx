import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.container}>
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
      <Image
        className={styles.argFlag}
        src="/images/arg-flag.png"
        alt="Bandera argentina"
        width={800}
        height={475}
      />
      <h1 className={inter.className}>BRANUEL</h1>

      <section className={styles.info}>
        <article className={styles.card}>Info</article>
      </section>

      <section className={styles.sponsors}>
        <Image
          className={styles.csgofast}
          src="/images/sponsors/csgofast.png"
          alt="CSGOFast"
          width={182}
          height={227}
        />
        <Image
          className={styles.fastskins}
          src="/images/sponsors/fastskins.png"
          alt="Fastskins"
          width={319}
          height={111}
        />
        <Image
          className={styles.hellcase}
          src="/images/sponsors/hellcase.png"
          alt="Hellcase"
          width={182}
          height={324}
        />
      </section>
    </div>
  );
}
