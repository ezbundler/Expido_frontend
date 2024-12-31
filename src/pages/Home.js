import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HomeContainer } from "../styles/HomeStyles";
// import ThemeToggle from "../components/ThemeToggler";
// import homelogo from "../images/homeLogo.png";
// import TypingEffect from 'react-typing-effect';
// Import images
import Img14 from "../images/hero14.jpg";
import Img13 from "../images/hero13.jpg";
import Img12 from "../images/hero12.jpg";
import Img11 from "../images/hero11.jpg";
import Img10 from "../images/hero10.jpg";
import Img9 from "../images/hero9.jpg";
import Img8 from "../images/hero8.jpg";
import Img7 from "../images/hero7.jpg";
import Img6 from "../images/hero6.jpg";
import Img5 from "../images/hero5.jpg";
import Img4 from "../images/hero4.jpg";
import Img3 from "../images/hero3.jpg";
import Img2 from "../images/hero2.jpg";
import Img15 from "../images/hero15.jpg";
import Img16 from "../images/hero16.jpg";
import Img17 from "../images/hero17.jpg";
import Img18 from "../images/hero18.jpg";
import Img19 from "../images/hero19.jpg";
import Img20 from "../images/hero20.jpg";
import Img21 from "../images/hero21.jpg";

// Array of images
const images = [
  Img14,
  Img13,
  Img12,
  Img11,
  Img10,
  Img9,
  Img8,
  Img7,
  Img6,
  Img5,
  Img4,
  Img3,
  Img2,
  Img15,
  Img16,
  Img17,
  Img18,
  Img19,
  Img20,
  Img21,
];
// const iconVariants = (duration) => ({
//     initial: { y: -10 },
//     animate: {
//       y: [10, -10],
//       transition: {
//         duration: duration,
//         ease: "linear",
//         repeat: Infinity,
//         repeatType: "reverse",
//       },
//     },
//   });


const phrases = [
    { text: "sharing expenses with friends", color: "text-orange-500" ,bg: "bg-orange-500"},
    { text: "managing your finances", color: "text-purple-500" ,bg:"bg-purple-500"},
    { text: "staying organized", color: "text-teal-600" , bg: "bg-teal-600"},
  ];
const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }, 4000); // Change phrase every 3 seconds
  
      return () => clearInterval(interval);
    }, []);


  
  return (
    <HomeContainer className="relative lg:mt-10 dark:bg-black
bg-slate-200">
      {/* Left Section with Animated Carousel */}

      <div className="hero w-full lg:w-1/2 relative flex flex-col items-center justify-center dark:bg-black bg-slate-200 p-4">
  <div className=" flex  w-full h-auto items-center justify-center">
    <div className="flex flex-col items-center justify-center w-full lg:w-[70%]  p-4">
    <div className="flex flex-row items-start justify-start w-full h-auto ">
  <h1 className="text-3xl sm:text-4xl lg:text-5xl text-black dark:text-white font-bold text-left leading-snug">
    Your Ultimate Companion for{" "}
    <br />
    <AnimatePresence mode="wait">
      <motion.span
        key={phrases[currentIndex].text}
        initial={{ opacity: 0, y: 10 }} // Start invisible and slightly below
        animate={{ opacity: 1, y: 0 }} // Fade in and move to position
        exit={{ opacity: 0, y: -10 }} // Fade out and move slightly up
        transition={{ duration: 0.8 }} // Smooth transition duration
        className={`${phrases[currentIndex].color} items-start justify-start text-left`}
      >
        {phrases[currentIndex].text}
      </motion.span>
    </AnimatePresence>
  </h1>
</div>


      <div className="mt-4 flex flex-col items-start justify-start">
        <p className="text-sm sm:text-base lg:text-sm dark:text-slate-300 text-slate-700 text-left leading-relaxed">
          Are you struggling to maintain contributions and manage expenses during group trips? Expido is here with the solution. Expido provides a seamless platform for tracking shared expenses, organizing contributions, and keeping everyone on the same page. Whether you're traveling with friends or family, Expido ensures your trip is hassle-free, efficient, and memorable. Say goodbye to the confusion and hello to stress-free travel!
        </p>
        <motion.button
        key={phrases[currentIndex].text}
        initial={{ opacity: 0, y: 10 }} // Start invisible and slightly below
        animate={{ opacity: 1, y: 0 }} // Fade in and move to position
        exit={{ opacity: 0, y: -10 }} // Fade out and move slightly up
        transition={{ duration: 2 }} // Smooth transition duration
         className={`${phrases[currentIndex].bg} rounded-lg py-1 px-3 mt-4 items-start justify-start text-left text-white`}>Sign up</motion.button>
      </div>
    </div>
  </div>
</div>



      {/* Right Section */}
      <div className="w-full lg:w-1/2 h-full dark:bg-black bg-slate-200 flex justify-center items-center">
        <div   className="relative h-[85%] w-[90%] lg:h-[70%] lg:w-[70%] flex justify-center items-center rounded-xl overflow-hidden">
          {/* Title Div Positioned at the Bottom */}
          <div className="absolute bottom-0 w-full text-center bg-black bg-opacity-50 py-2 text-white z-10 rounded-b-xl">
            <h1 className="text-lg font-bold">Title</h1>
          </div>

          <AnimatePresence>
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, filter: "blur(20px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(20px)" }}
              transition={{ duration: 1 }}
              style={{
                backgroundImage: `url(${images[currentImageIndex]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1,
              }}
              className="h-full w-full rounded-xl"
            ></motion.div>
          </AnimatePresence>
        </div>
      </div>
    </HomeContainer>
  );
};

export default Home;







{/* Continuous Up-Down Animation for Logo */}
      {/* <motion.img
        src={homelogo}
        alt="Home Logo"
        className="h-[30vh] w-[25vw]"
        animate={{
          y: ["0px", "-15px", "0px"], // Up and down movement
          transition: {
            y: {
              repeat: Infinity, // Repeat infinitely
              repeatType: "loop", // Loop the animation
              duration: 3.5, // Duration of each cycle
              ease: "easeInOut", // Smooth easing
            },
          },
        }}
      /> */}


      {/* Headline with Typewriter Effect */}
      {/* <TypingEffect
  text="Your Ultimate Travel Companion for Smarter, Seamless Journeys"
  speed={90} // typing speed
  eraseDelay={1000} // delay before erasing the text
  cursorRenderer={(cursor) => (
    <h1 className="text-white font-bold text-2xl mt-5">{cursor}</h1>
  )}
  className="text-orange-400 dark:text-white font-bold text-sm lg:text-2xl" // Ensures the text is white and bold
/> */}


      {/* Description below the headline */}
      {/* <p className="text-white text-sm mt-4 mx-8 text-center">
        Are you struggling to maintain contributions and manage expenses during group trips? Expido is here with the solution. Expido provides a seamless platform for tracking shared expenses, organizing contributions, and keeping everyone on the same page. Whether you're traveling with friends or family, Expido ensures your trip is hassle-free, efficient, and memorable. Say goodbye to the confusion and hello to stress-free travel!
      </p> */}