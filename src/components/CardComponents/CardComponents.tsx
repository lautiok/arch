import { MoveUpRight, Plus } from "lucide-react";
import style from "./cardcomponents.module.css";
import Link from "next/link";

export default function CardComponents() {
  const data = [
    {
      id: 1,
      image: "/r1.jpg",
      title: "/inside",
      local: "Poland, Warsaw",
    },
    {
      id: 2,
      image: "/r2.jpg",
      title: "/technology",
      local: "Germany, Munich",
    },
  ];
  return (
    <section className={style.card}>
      {data.map((item) => (
        <article
          key={item.id}
          className={
            style.cardContent +
            ` animate__animated animate__fadeInRight animate__delay-${item.id}s`
          }
        >
          <div
            className={style.cardContentImage}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <Link href="/about">
              <Plus size={20} />
            </Link>
          </div>
          <div className={style.cardContentInfo}>
            <h3>{item.title}</h3>
            <p>{item.local}</p>
          </div>
        </article>
      ))}
      <div
        className={
          style.hero_uno +
          " animate__animated animate__fadeInRight animate__delay-3s"
        }
      >
        <p>/developments</p>
        <h2>
          5 reasons to choose <br /> sustainable materials <br /> for your home.
        </h2>
        <p className={style.parr}>
          Find out more{" "}
          <Link href="/">
            <MoveUpRight size={20} />
          </Link>
        </p>
      </div>
    </section>
  );
}
