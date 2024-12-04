import HeroSectionComponents from "@/components/HeaderSectionComponents/HeroSectionComponents";
import style from "./page.module.css";
import CardComponents from "@/components/CardComponents/CardComponents";
import IndustryComponents from "@/components/IndustryComponents/IndustryComponents";
export default function Home() {
  return (
    <main className={style.main}>
      <HeroSectionComponents />
      <CardComponents />
      <IndustryComponents />
    </main>
  );
}
