// import { motion } from "framer-motion";

// // Background Animation Variants
// const backgroundVariants = {
//   initial: {
//     backgroundPosition: "center center",
//     backgroundSize: "100%",
//   },
//   animate: {
//     backgroundPosition: ["center center", "center top", "center bottom"],
//     backgroundSize: ["100%", "110%", "100%"], // Zoom in and out effect
//     transition: {
//       duration: 10, // Animation duration
//       repeat: Infinity,
//       ease: "easeInOut",
//     },
//   },
// };

// function Hero() {
//   return (
//     <motion.div
//       id="hero"
//       className="relative bg-fixed bg-parl bg-cover h-screen w-full md:px-20"
//       variants={backgroundVariants} // Apply the background animation variants
//       initial="initial"
//       animate="animate"
//     >
//       {/* Hero Content */}
//       <div className="relative z-10 flex flex-col sm:flex-row justify-center w-full items-center md:p-3 md:pt-11 mt-16 sm:mt-1">
//         <div className="text-5xl font-bold m-auto md:mt-10 px-4 md:py-10 flex flex-col gap-2 w-full">
//           <h1 className="sticky text-neutral-200 w-full mx-auto text-center text-6xl font-bold">
//             Welcome to{" "}
//             <span className=" text-orange-600  text-6xl border-b-4 px-2 border-orange-600 rounded-md font-extrabold">
//               CraticAi
//             </span>
//           </h1>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default Hero;

import React from "react";
import Cards from "./Cards";

function Hero() {
  // Array of card data
  const cardDataArray = [
    {
      imageUrl:
        "https://imageio.forbes.com/specials-images/imageserve/650945e2810848cde5016621/What-Is-Generative-AI--A-super-Simple-Explanation-Anyone-Can-Understand/960x0.jpg?height=399&width=711&fit=bounds",
      title: "Generative Ai",
      description:
        "Generative AI, or generative artificial intelligence, is a technology that uses AI to create new content such as text, images, music, audio, and videos. It's powered by large AI models, called foundation models, that can perform a variety of tasks, including summarization, Q&A, and classification",
      buttonText: "Learn More",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbz1cavEb0cheIqsY0oskuNkpM4Ny5HR6geQ&s",
      title: "Machine LLearning",
      description:
        "Machine learning (ML) is a subset of artificial intelligence (AI) that allows systems to learn and improve themselves using data. ML systems use neural networks and deep learning to analyze large amounts of data, and can continuously adjust and improve their performance.",
      buttonText: "Learn More",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq8AEuHUVPecbRtpqo5BnYXFi2AL-8jfEqnA&s",
      title: "Automation",
      description:
        "Automation is the use of technology to perform tasks with minimal human input. It can involve machines, computers, robotics, or processes.",
      buttonText: "Learn More",
    },
  ];

  return (
    <div id="/" className="flex flex-col gap-y-3 mx-auto">
      <div className="flex flex-col md:flex-row justify-center items-center gap-x-2 mt-32 px-4 md:px-11">
        <h1 className="md:w-1/2 text-xl md:text-4xl font-extrabold text-neutral-300">
          Our Cutting-Edge Services
        </h1>
        <span className="md:w-1/2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nobis
          aliquam voluptate odit recusandae illo exercitationem sunt repudiandae
          rerum dolore, facilis vero a fuga quam quidem perferendis adipisci
          consectetur. Sunt sint est iste, alias quia reprehenderit voluptates
          rerum fugiat cupiditate aut corrupti laboriosam, fuga libero. Sequi et
          id voluptatibus vero?
        </span>
      </div>  

      {/* Displaying multiple cards */}
      <div className="grid md:grid-cols-3    md:p-0 gap-8 mt-8">
        {cardDataArray.map((cardData, index) => (
          <Cards
            key={index}
            imageUrl={cardData.imageUrl}
            title={cardData.title}
            description={cardData.description}
            buttonText={cardData.buttonText}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
