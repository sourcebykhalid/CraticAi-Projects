import { motion } from "framer-motion";

// Background Animation Variants
const backgroundVariants = {
  initial: {
    backgroundPosition: "center center",
    backgroundSize: "100%",
  },
  animate: {
    backgroundPosition: ["center center", "center top", "center bottom"],
    backgroundSize: ["100%", "110%", "100%"], // Zoom in and out effect
    transition: {
      duration: 10, // Animation duration
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

function Hero() {
  return (
    <motion.div
      id="hero"
      className="relative bg-fixed bg-parl bg-cover h-screen w-full md:px-20"
      variants={backgroundVariants} // Apply the background animation variants
      initial="initial"
      animate="animate"
    >
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col sm:flex-row justify-center w-full items-center md:p-3 md:pt-11 mt-16 sm:mt-1">
        <div className="text-5xl font-bold m-auto md:mt-10 px-4 md:py-10 flex flex-col gap-2 w-full">
          <h1 className="sticky text-neutral-200 w-full mx-auto text-center text-6xl font-bold">
            Welcome to{" "}
            <span className=" text-orange-600  text-6xl border-b-4 px-2 border-orange-600 rounded-md font-extrabold">
              CraticAi
            </span>
          </h1>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
