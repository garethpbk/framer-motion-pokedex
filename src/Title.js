import React from "react";
import { motion } from "framer-motion";

const bootVariants = {
  start: {
    backgroundColor: "#000",
    height: "0px",
    width: "0px",
    borderRadius: "100%"
  },
  finish: {
    backgroundColor: "#f5f5dc",
    height: "100%",
    width: "100%",
    borderRadius: "0%"
  }
};

const letterVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(0, 0, 0, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(0, 0, 0, 1)"
  }
};

function Title() {
  return (
    <motion.div
      className="boot-wrapper"
      variants={bootVariants}
      initial="start"
      animate="finish"
      transition={{
        default: { duration: 2 },
        borderRadius: { duration: 2, ease: "easeInOut" },
        backgroundColor: { delay: 2, duration: 4, ease: "easeInOut" }
      }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="140.1"
        height="54.65"
        viewBox="0 0 140.1 54.65"
        className="title"
      >
        <motion.path variants={letterVariants} initial="hidden" animate="visible" transition={{
            default: { duration: 2, ease: "easeInOut", delay: 2 },
            fill: { duration: 2, ease: [1, 0, 0.8, 1], delay: 2 }
          }} d="M0,9.65l4-1.3C5.25,8,6.56,7.57,7.94,7.22s2.71-.65,4-.86a18.37,18.37,0,0,1,3-.24,23.43,23.43,0,0,1,3.34.14A9,9,0,0,1,20.5,7a6.55,6.55,0,0,1,1.9,1.36,7.15,7.15,0,0,1,1.37,2,2.46,2.46,0,0,1,.21,1c0,1.32-.72,2.93-2.16,4.85a43,43,0,0,1-4.32,5q-2.17,2.14-3.24,3.08l3.16,11.09-4.61,3.32-8.06-23s-.14.11-.34.33l-.78.87c-.32.36-.53.58-.61.66a2.88,2.88,0,0,1-.34-.76c-.19-.5-.45-1.2-.77-2.1s-.69-1.89-1.09-3S.14,9.93,0,9.65Zm11.37,4.89,1.44,5.18c.73-.74,1.63-1.74,2.71-3s1.62-2.2,1.62-2.78a.34.34,0,0,0-.28-.38,7.07,7.07,0,0,0-1.57-.18A6.42,6.42,0,0,0,11.37,14.54Z" />
        <motion.path variants={letterVariants} initial="hidden" animate="visible" transition={{
            default: { duration: 2, ease: "easeInOut", delay: 2.5 },
            fill: { duration: 2, ease: [1, 0, 0.8, 1], delay: 2.5 }
          }} d="M37.18,18.54a5.72,5.72,0,0,1,2,1.81,7.77,7.77,0,0,1,1.14,2.55,11.84,11.84,0,0,1,.36,2.94,14.88,14.88,0,0,1-.2,2.44A13,13,0,0,1,40,30.45a7.42,7.42,0,0,1-.82,1.67A16.59,16.59,0,0,1,36.76,35a13.08,13.08,0,0,1-2.59,1.93A11.89,11.89,0,0,1,31.56,38,9.85,9.85,0,0,1,29,38.3a8.67,8.67,0,0,1-2.84-.46,7.78,7.78,0,0,1-2.29-1.22,8.58,8.58,0,0,1-2.44-3.51,12.43,12.43,0,0,1-.88-4.67A9.6,9.6,0,0,1,23,21.6a15.92,15.92,0,0,1,4.33-3.36,9.84,9.84,0,0,1,7.2-.79A12.06,12.06,0,0,1,37.18,18.54Zm-1,3a4.84,4.84,0,0,1-1.29,2.35,2.8,2.8,0,0,1-1.94,1,1.53,1.53,0,0,1-.85-.24,1.81,1.81,0,0,1-.53-1.48,2.82,2.82,0,0,1,.54-1.6,3.55,3.55,0,0,1,1.7-1.25,5.92,5.92,0,0,0-2.24.44,6.4,6.4,0,0,0-1.86,1.14,5.77,5.77,0,0,0-1.24,1.56A3.66,3.66,0,0,0,28,25.19a3,3,0,0,0,1.51,2.6,5,5,0,0,0,2.67.9,3.26,3.26,0,0,0,2.21-.84,5.24,5.24,0,0,0,1.48-2.14,7.14,7.14,0,0,0,.51-2.59A5.88,5.88,0,0,0,36.14,21.5Z" />
        <motion.path variants={letterVariants} initial="hidden" animate="visible" transition={{
            default: { duration: 2, ease: "easeInOut", delay: 3 },
            fill: { duration: 2, ease: [1, 0, 0.8, 1], delay: 3 }
          }} d="M37.79,8.21l8.93-3.75L48,24.77l7.35-4L63,21.88l-10,7.63,9.37,7.07.42,7.05L49,33.7l.44,8.63-8.36.16L39.52,12l-2.59.58Z" />
        <motion.path variants={letterVariants} initial="hidden" animate="visible" transition={{
            default: { duration: 2, ease: "easeInOut", delay: 3.5 },
            fill: { duration: 2, ease: [1, 0, 0.8, 1], delay: 3.5 }
          }} d="M75.23,27.86,79.47,33a5.58,5.58,0,0,1-2.42,2.7,16.21,16.21,0,0,1-4.53,2,20.17,20.17,0,0,1-5.25.71,12.87,12.87,0,0,1-4.14-.62,5.82,5.82,0,0,1-2.8-1.86,8.52,8.52,0,0,1-1.71-5.48,14.72,14.72,0,0,1,1-5.2,9.88,9.88,0,0,1,2-3.58,13.2,13.2,0,0,1,2.79-2,13.35,13.35,0,0,1,3.12-1.21A13.6,13.6,0,0,1,70.84,18a12.46,12.46,0,0,1,4.24.72,10.36,10.36,0,0,1,3.53,2.06L69,32.26a5.64,5.64,0,0,0,2.43-.54,7.19,7.19,0,0,0,2.12-1.53A10.91,10.91,0,0,0,75.23,27.86Zm-4.87-4.09a3.72,3.72,0,0,0-1.75-.44,4.66,4.66,0,0,0-1.84.38,3,3,0,0,0-1.26.92,5,5,0,0,0-1.09,3.09,5.08,5.08,0,0,0,.13,1.18c.08.37.22.89.42,1.55Z" />
        <motion.path variants={letterVariants} initial="hidden" animate="visible" transition={{
            default: { duration: 2, ease: "easeInOut", delay: 4 },
            fill: { duration: 2, ease: [1, 0, 0.8, 1], delay: 4 }
          }} d="M88.54,3.3,95.89,0l.44,23.8a14.28,14.28,0,0,1,.14,2.08,11.28,11.28,0,0,1-.07,1.51l.21,10.77-7.91.42V37.51a10.18,10.18,0,0,1-3.9.79A8.76,8.76,0,0,1,82,37.85a7.88,7.88,0,0,1-2.3-1.23,8.67,8.67,0,0,1-2.44-3.51,12.43,12.43,0,0,1-.88-4.67,9.64,9.64,0,0,1,2.44-6.84,16.39,16.39,0,0,1,4.36-3.35,9.86,9.86,0,0,1,4.57-1.15c.44,0,.77,0,1,0Zm.16,17.07a5.77,5.77,0,0,0-1.91.62,6.51,6.51,0,0,0-1.61,1.16,5.12,5.12,0,0,0-1,1.47,3.66,3.66,0,0,0-.38,1.57,3,3,0,0,0,1.51,2.6,4.8,4.8,0,0,0,2.71.9,6.5,6.5,0,0,0,.72-.07V24.87a1.48,1.48,0,0,1-.84-.24A2,2,0,0,1,87.33,23,3,3,0,0,1,88.7,20.37Z" />
        <motion.path variants={letterVariants} initial="hidden" animate="visible" transition={{
            default: { duration: 2, ease: "easeInOut", delay: 4.5 },
            fill: { duration: 2, ease: [1, 0, 0.8, 1], delay: 4.5 }
          }} d="M111.23,27.86,115.47,33a5.53,5.53,0,0,1-2.42,2.7,16.21,16.21,0,0,1-4.53,2,20.17,20.17,0,0,1-5.25.71,12.87,12.87,0,0,1-4.14-.62,5.82,5.82,0,0,1-2.8-1.86,8.52,8.52,0,0,1-1.71-5.48,14.72,14.72,0,0,1,1-5.2,9.88,9.88,0,0,1,2-3.58,13.2,13.2,0,0,1,2.79-2,13.35,13.35,0,0,1,3.12-1.21,13.6,13.6,0,0,1,3.32-.41,12.46,12.46,0,0,1,4.24.72,10.36,10.36,0,0,1,3.53,2.06L105,32.26a5.64,5.64,0,0,0,2.43-.54,7.19,7.19,0,0,0,2.12-1.53A10.91,10.91,0,0,0,111.23,27.86Zm-4.86-4.09a3.76,3.76,0,0,0-1.76-.44,4.66,4.66,0,0,0-1.84.38,3,3,0,0,0-1.26.92,5,5,0,0,0-1.09,3.09,5.08,5.08,0,0,0,.13,1.18c.08.37.22.89.42,1.55Z" />
        <motion.path variants={letterVariants} initial="hidden" animate="visible" transition={{
            default: { duration: 2, ease: "easeInOut", delay: 5 },
            fill: { duration: 2, ease: [1, 0, 0.8, 1], delay: 5 }
          }} d="M125.63,34.24l-4.25,5.5-9.07.29,8.79-11.62-9.94-12.85,9.64.42,4.83,6.38L130.45,16l9.65-.42-9.93,12.85L139,40l-9.09-.29Z" />
      </motion.svg>
    </motion.div>
  );
}

export default Title;
