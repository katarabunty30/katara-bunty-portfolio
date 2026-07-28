import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

function CursorGlow() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const x = useSpring(mouseX, {
    stiffness: 180,
    damping: 20,
    mass: 0.5,
  });

  const y = useSpring(mouseY, {
    stiffness: 180,
    damping: 20,
    mass: 0.5,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 175);
      mouseY.set(e.clientY - 175);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="pointer-events-none fixed left-0 top-0 z-0 w-[350px] h-[350px]"
    >
      <div className="w-full h-full rounded-full bg-cyan-400/20 blur-[120px]" />
    </motion.div>
  );
}

export default CursorGlow;