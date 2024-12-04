import Link from "next/link";
import style from "./footersectioncomponents.module.css";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";

export default function FooterSectionComponents() {
  return (
    <footer className={style.footer}>
      <section className={style.footerContent}>
        <div className={style.footerContentLogo}>
          <Link href="/">
            <h2>arch</h2>
          </Link>
          <article className={style.logo_button}>
            <Link href="/reserve">reserve</Link>
            <Link className={style.projects} href="/projects">
              projects
            </Link>
          </article>
          <article className={style.footerContentSocial}>
            <a href="https://www.linkedin.com/company/arch-design/">
              <Linkedin size={20} />
            </a>
            <a href="https://www.twitter.com/archdesign">
              <Twitter size={20} />
            </a>
            <a href="https://www.facebook.com/archdesign">
              <Facebook size={20} />
            </a>
            <a href="https://www.github.com/arch-design">
              <Github size={20} />
            </a>
          </article>
        </div>
        <div className={style.footer_nav}>
          <ul>
            <li>
              <Link href="/plans">Plans & Pricing</Link>
            </li>
            <li>
              <Link href="/features">Features</Link>
            </li>
            <li>
              <Link href="/blog">New & Blogs</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
          </ul>
        </div>
      </section>
      <section className={style.footerContentReserved}>
        <p>
          @ {new Date().getFullYear()} rch architecture. All rights reserved.
          design and development{" "}
          <a href="https://www.nahuelguerra.com.ar/">Nahuel Guerra</a>
        </p>
        <Link className={style.footerLink} href="/service">
          Terms of Service
        </Link>
      </section>
    </footer>
  );
}
