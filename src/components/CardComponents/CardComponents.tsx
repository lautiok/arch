/* eslint-disable @next/next/no-img-element */
"use client";
import { MoveUpRight, Plus } from "lucide-react";
import style from "./cardcomponents.module.css";
import Link from "next/link";
import { useState } from "react";

export default function CardComponents() {
  const [openModalId, setOpenModalId] = useState<number | null>(null);

  const data = [
    {
      id: 1,
      image: "/r1.jpg",
      title: "/inside",
      local: "Poland, Warsaw",
      describe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 2,
      image: "/r2.jpg",
      title: "/technology",
      local: "Germany, Munich",
      describe: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ];

  return (
    <section className={style.card}>
      {data.map((item) => (
        <div key={item.id}>
          <article
            className={
              style.cardContent +
              ` animate__animated animate__fadeInRight animate__delay-${item.id}s`
            }
          >
            <div
              className={style.cardContentImage}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <button onClick={() => setOpenModalId(item.id)}>
                <Plus size={20} />
              </button>
            </div>
            <div className={style.cardContentInfo}>
              <h3>{item.title}</h3>
              <p>{item.local}</p>
            </div>
          </article>

          {openModalId === item.id && (
            <div className={style.modalOverlay}>
              <div className={style.modalContent}>
                <img src={item.image} alt={item.title} />
                <h2>{item.title}</h2>
                <p>{item.describe}</p>
                <button onClick={() => setOpenModalId(null)}>Close</button>
              </div>
            </div>
          )}
        </div>
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
