import React from "react";
import style from "./slidercomponents.module.css";
import { X } from "lucide-react";
import Link from "next/link";

interface SliderComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

const SliderComponent: React.FC<SliderComponentProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <div
      className={`${style.slider} ${
        isOpen ? style.sliderOpen : style.sliderClose
      }`}
    >
      <button className={style.closeButton} onClick={onClose}>
        <X size={30} />
      </button>
      <div className={style.content}>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#inside">Inside</Link>
            </li>
            <li>
              <Link href="#technology">Technology</Link>
            </li>
            <li>
              <Link href="/#development">Development</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SliderComponent;
