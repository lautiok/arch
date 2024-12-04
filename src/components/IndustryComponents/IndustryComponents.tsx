/* eslint-disable @next/next/no-img-element */
import style from "./IndustryComponents.module.css";
import i1 from "../../../public/i1.jpg";
import i2 from "../../../public/i2.jpg";
import i3 from "../../../public/i3.jpg";

export default function IndustryComponents() {
  return (
    <section className={style.industry}>
      <article className={style.industryContent}>
        <div className={style.industryContentTitle}>
          <h2>Where affordability</h2>
          <p>
            In a rapidly urbanizing world, it is essential to think about our
            impact on the environment. We are convinced that together we will
            change the world for the better.
          </p>
        </div>
        <div className={style.industryContentInfo}>
          <p>/affordability</p>
          <p>Germany, Munich</p>
        </div>
      </article>
      <div className={style.imagesIndustry}>
        <img className={style.image_uno} src={i1.src} alt="industry" />
        <img className={style.image_dos} src={i2.src} alt="industry" />
        <img className={style.image_tres} src={i3.src} alt="industry" />
      </div>
    </section>
  );
}
