import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./home.module.css";

const inter = Inter({ subsets: ["latin"] });

const BACKGROUNDS = [
  {
    className: styles.branuelImage,
    src: "/images/branuel.png",
    alt: "Branuel",
    width: 500,
    height: 653,
    quality: 100,
  },
  {
    className: styles.flares,
    src: "/images/flare.png",
    alt: "Fuego",
    width: 1920,
    height: 1080,
  },
  {
    className: styles.background,
    src: "/images/rocks.jpg",
    alt: "Fondo de rocas",
    width: 1920,
    height: 1080,
  },
  {
    className: styles.argFlag,
    src: "/images/arg-flag.png",
    alt: "Bandera argentina",
    width: 800,
    height: 475,
  },
];

const SPONSORS = [
  {
    className: styles.csgofast,
    src: "/images/sponsors/csgofast.png",
    alt: "CSGOFast",
    width: 182,
    height: 227,
  },
  {
    className: styles.fastskins,
    src: "/images/sponsors/fastskins.png",
    alt: "Fastskins",
    width: 319,
    height: 111,
  },
  {
    className: styles.hellcase,
    src: "/images/sponsors/hellcase.png",
    alt: "Hellcase",
    width: 182,
    height: 324,
  },
];

const SOCIALS = [
  {
    src: "/images/icons/instagram.svg",
    alt: "Instagram",
  },
  {
    src: "/images/icons/twitter.svg",
    alt: "Twitter",
  },
  {
    src: "/images/icons/youtube.svg",
    alt: "Youtube",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      {BACKGROUNDS.map(({ alt, ...background }) => (
        <Image key={background.src} alt={alt} {...background} />
      ))}

      <h1 className={inter.className}>BRANUEL</h1>

      <section className={styles.info}>
        <article className={`${styles.card} ${styles.personal}`}>
          <div className={inter.className}>Brandon</div>
          <div className={inter.className}>21 años</div>
          <Image
            src="/images/icons/arg-flag.svg"
            alt="Bandera argentina"
            width={20}
            height={20}
          />

          <div className={styles.social}>
            {SOCIALS.map(({ alt, src }) => (
              <Image key={src} alt={alt} width={20} height={20} src={src} />
            ))}
          </div>
        </article>
      </section>

      <section className={styles.sponsors}>
        {SPONSORS.map(({ alt, ...sponsor }) => (
          <Image key={sponsor.src} alt={alt} {...sponsor} />
        ))}
      </section>
    </div>
  );
}
