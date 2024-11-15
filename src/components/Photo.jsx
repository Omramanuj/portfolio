"use client";
import {motion}  from "framer-motion";
import Image from "next/image";
const Photo = () => {
  return (
 
    <div className="w-full h-full relative flex items-center justify-center">

        <div className="w-[200px] h-[200px] xl:h-[398px] xl:w-[398px] mix-blend-lighten absolute rounded-full">
        <Image
            src="/assets/landingPage/work-from-home.png"
            alt="Ramanuj Om"
            priority
            quality={100}
            fill
            className="object-contain"
        />
        </div>


      {/* circle */}
      <motion.svg className="w-[300px] h-[300px] xl:h-[406px] xl:w-[406px]"
      fill="transperent"
      viewBox="0 0 506 506"
      xmlns="http://w3.org/2000/svg">
        <motion.circle
        cx="253"
        cy="253"
        r="250"
        stroke="#00ff99"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{strokeDasharray:"24 10 0 0"}}
        animate={{
          strokeDasharray:["15 120 25 25","16 25 92 72","4 250 22 22"],
          rotate:[120,360]
        }}
        transition={{
          duration:20,
          repeat:Infinity,
          repeatType:"reverse"
        }}
        />
      </motion.svg>
    </div>
        

  )
}

export default Photo