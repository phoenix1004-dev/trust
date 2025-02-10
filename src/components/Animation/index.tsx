import { motion } from "framer-motion";
import Player from "lottie-react";
import { FAQ_DATA, POINTER } from "../../types";
import { useState } from "react";
import { minus, plus } from "../../assets/image";
import animationData from "../../assets/animations/hero-svg.json";

type SliderProps = {
  dir: "right" | "left";
  time?: number;
  pos?: string;
  children: React.ReactNode;
};

type FAQProps = {
  item: FAQ_DATA;
};

type InitialAppearanceProps = {
  className?: string;
  style?: any;
  from?: POINTER;
  to?: POINTER;
  time?: number;
  delay?: number;
  children: React.ReactNode;
};

type AnimationButtonProps = {
  className?: string;
  children?: React.ReactNode;
};

export const Slider: React.FC<SliderProps> = ({
  dir,
  time = 10,
  pos = "-71%",
  children,
}) => {
  return (
    <motion.div
      className="flex space-x-4"
      initial={{ x: dir === "right" ? pos : 0 }}
      animate={{ x: dir === "right" ? 0 : pos }}
      transition={{
        ease: "linear",
        duration: time,
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  );
};

export const FAQAnimation: React.FC<FAQProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="px-[30px] py-[16px] border border-solid border-[#18181a] rounded-[14px] bg-[#09090a] flex flex-col overflow-y-hidden">
      <div className="flex justify-between items-center">
        <p className="text-[20px] font-semibold content-center pr-[10px]">
          {item.qu}
        </p>
        <div
          className="min-w-[40px] min-h-[40px] w-[40px] h-[40px] border border-solid border-[#1d1d20] rounded-[10px] flex items-center justify-center cursor-pointer"
          onClick={toggle}
        >
          <img className="" src={isOpen ? minus : plus} alt="plus" />
        </div>
      </div>
      <motion.div
        className="border-t flex border-solid border-[#1d1d20]"
        animate={
          isOpen
            ? {
                height: "auto",
                opacity: 1,
                marginTop: "24px",
                paddingTop: "24px",
              }
            : { height: 0, opacity: 0, marginTop: 0, paddingTop: 0 }
        }
      >
        <p className="text-[17px] text-[#94969d]">{item.an}</p>
      </motion.div>
    </div>
  );
};

export const InitialAppearance: React.FC<InitialAppearanceProps> = ({
  className = "",
  style = {},
  from = { top: 0, left: 0 },
  to = { top: 0, left: 0 },
  time = 0.5,
  delay = 0,
  children,
}) => {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ ...from, opacity: 0 }}
      whileInView={{ ...to, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: time, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export const BgAnimation = () => {
  return (
    <div
      className="absolute w-full z-0"
      style={{ height: "calc(100vh - 157px" }}
    >
      <Player
        autoPlay
        loop
        animationData={animationData}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export const GradientBg = () => {
  return (
    <div className="wrapper-of-wrapper">
      <div className="wrapper">
        <div className="rainbow"></div>
      </div>
    </div>
  );
};

export const AnimationButton: React.FC<AnimationButtonProps> = ({
  className,
  children,
}) => {
  return (
    <div className={className}>
      <button className="shiny-cta">
        <span>{children}</span>
      </button>
    </div>
  );
};
