import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./home.module.css";

const inter = Inter({ subsets: ["latin"] });

const BACKGROUNDS = [
  {
    className: styles.argFlag,
    src: "/images/arg-flag.png",
    alt: "Bandera argentina",
    width: 800,
    height: 475,
  },
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
];

const SPONSORS = [
  {
    className: styles.csgofast,
    src: "/images/sponsors/csgofast.png",
    alt: "CSGOFast",
    width: 182,
    height: 227,
    link: "https://t.csgofast.cash/RsDA3v",
  },
  {
    className: styles.fastskins,
    src: "/images/sponsors/fastskins.png",
    alt: "Fastskins",
    width: 319,
    height: 111,
    link: "https://farmskins.com/ref-branuel",
  },
  {
    className: styles.hellcase,
    src: "/images/sponsors/hellcase.png",
    alt: "Hellcase",
    width: 182,
    height: 324,
    link: "https://hellca.se/branuelcs",
  },
];

const SOCIALS = [
  {
    src: "/images/icons/instagram.svg",
    alt: "Instagram",
    href: "https://www.instagram.com/branuelcs/",
  },
  {
    src: "/images/icons/twitter.svg",
    alt: "Twitter",
    href: "https://twitter.com/branuelcs",
  },
  {
    src: "/images/icons/youtube.svg",
    alt: "Youtube",
    href: "https://www.youtube.com/channel/UC6ph2-J0_W-yALEU6MG8Ckg",
  },
];

const GIVEAWAYS = [
  {
    id: 1,
    src: "/images/skins/decimator.webp",
    skin: "M4A1S Diezmador",
    winner: "-",
    price: 30,
  },
  {
    id: 2,
    src: "/images/skins/dk-printstream.webp",
    skin: "Desert Eagle Printstream",
    winner: "agusmoles",
    price: 50,
  },
  {
    id: 3,
    src: "/images/skins/decimator.webp",
    skin: "M4A1S Diezmador",
    winner: "-",
    price: 30,
  },
  {
    id: 4,
    src: "/images/skins/decimator.webp",
    skin: "M4A1S Diezmador",
    winner: "-",
    price: 30,
  },
  {
    id: 5,
    src: "/images/skins/decimator.webp",
    skin: "M4A1S Diezmador",
    winner: "-",
    price: 30,
  },
  {
    id: 6,
    src: "/images/skins/decimator.webp",
    skin: "M4A1S Diezmador",
    winner: "-",
    price: 30,
  },
  {
    id: 7,
    src: "/images/skins/decimator.webp",
    skin: "M4A1S Diezmador",
    winner: "-",
    price: 30,
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

          <div className={styles.social}>
            <Image
              src="/images/icons/arg-flag.svg"
              alt="Bandera argentina"
              width={20}
              height={20}
            />
            <div className={styles.gcBadge}>
              <a
                className={inter.className}
                href="https://gamersclub.com.br/player/900692"
                target="_blank"
                rel="noopenner noreferrer"
              >
                21
              </a>
            </div>
          </div>

          <div className={styles.social}>
            {SOCIALS.map(({ alt, src, href }) => (
              <a
                key={src}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image alt={alt} width={20} height={20} src={src} />
              </a>
            ))}
          </div>
        </article>

        <article className={`${styles.card} ${styles.giveaways}`}>
          <div className={inter.className}>SORTEOS</div>

          {GIVEAWAYS.map(({ id, src, skin, winner, price }) => (
            <div key={id} className={styles.winner}>
              <Image src={src} alt={skin} width={100} height={100} />
              <div className={styles.winnerInfo}>
                <div className={inter.className}>{skin}</div>
                <div className={inter.className}>Ganador: {winner}</div>
                <div className={inter.className}>Precio: {price}USD🤑</div>
              </div>
            </div>
          ))}
        </article>
      </section>

      <section className={styles.sponsors}>
        {SPONSORS.map(({ alt, className, link, ...sponsor }) => (
          <a
            key={sponsor.src}
            className={className}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image alt={alt} {...sponsor} />
          </a>
        ))}
      </section>
    </div>
  );
}
