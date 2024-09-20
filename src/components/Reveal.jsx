import { motion } from "framer-motion";

const revealVariants = {
  hidden: { opacity: 0, y: 20 }, // Start with opacity 0 and a small downward offset
  visible: {
    opacity: 1,
    y: 0, // Bring it back to its original position
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const Reveal = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Animation triggers when the component is 30% in the viewport
      variants={revealVariants} // Apply the reveal animation
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
