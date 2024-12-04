"use client";
import React, { useState } from "react";
import { PanelsTopLeft, Phone } from "lucide-react";
import style from "./headerComponents.module.css";
import SliderComponent from "../SliderComponents/SliderComponents";

const HeaderComponents: React.FC = () => {
  const [isSliderOpen, setIsSliderOpen] = useState<boolean>(false);

  const toggleSlider = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  return (
    <header className={style.header}>
      <section className={style.logo}>
        <h1>arch</h1>
      </section>
      <section className={style.buttons}>
        <button onClick={toggleSlider}>
          <PanelsTopLeft />
        </button>
        <a href="tel:+5692929292">
          <Phone size={20} />
          Book a call
        </a>
      </section>
      <SliderComponent
        isOpen={isSliderOpen}
        onClose={() => setIsSliderOpen(false)}
      />
    </header>
  );
};

export default HeaderComponents;
