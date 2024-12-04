import style from "./herosectioncomponents.module.css";
import "animate.css";
export default function HeroSectionComponents() {
  return (
    <section className={style.hero + " animate__animated animate__fadeInUp"}>
      <div className={style.heroContent}>
        <h2>
          Where affordability <br /> meets sustainability
        </h2>
        <div className={style.articles}>
          <p>
            We are a real estate development company that seeks to reduce
            environmental impacts by building sustainable and profitable
            properties.
          </p>
          <p className={style.parr}>
            In a rapidly urbanizing world, it is essential to think about our
            impact on the environment. We are convinced that together we will
            change the world for the better.
          </p>
        </div>
      </div>
    </section>
  );
}
