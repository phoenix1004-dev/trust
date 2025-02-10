import Desktop from "./Desktop";
import Mobile from "./Mobile";
import { motion, useScroll, useSpring } from "framer-motion";

const Nav = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      className="w-full fixed top-0 z-[9999]"
      style={{
        backdropFilter: "blur(6px)",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
      }}
    >
      <Desktop />
      <Mobile />
      <motion.div className="h-1 bg-blue-500 origin-left" style={{ scaleX }} />
    </div>
  );
};

export default Nav;
