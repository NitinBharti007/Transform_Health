import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import doctor from "../assets/characters/doctor.svg";
import personStanding from "../assets/characters/person-standing.svg";
import personLaptop from "../assets/characters/person-laptop.svg";
import coupleStanding from "../assets/characters/couple-standing.svg";
import wheelchair from "../assets/characters/wheelchair.svg";
import personWithFool from "../assets/characters/personwithfool.svg";
import newPerson from "../assets/characters/newperson.svg";
import personLast from "../assets/characters/personlast.svg";
import personBox from "../assets/characters/person-box.svg";
import megaphone from "../assets/characters/megaphone.svg";
import laptop from "../assets/characters/laptop.svg";
import couple from "../assets/characters/couple.svg";

const characters = [
  { id: 1, top: "5%", left: "8%", img: doctor },
  { id: 2, top: "10%", left: "20%", img: personStanding },
  { id: 3, top: "15%", left: "32%", img: personLaptop },
  { id: 4, top: "5%", left: "45%", img: coupleStanding },
  { id: 5, top: "10%", left: "58%", img: wheelchair },
  { id: 6, top: "15%", left: "70%", img: personWithFool },
  { id: 7, top: "5%", left: "82%", img: megaphone },
  { id: 8, top: "10%", left: "90%", img: laptop },
  { id: 9, top: "25%", left: "15%", img: personBox },
  { id: 10, top: "28%", left: "35%", img: newPerson },
  { id: 11, top: "25%", left: "60%", img: couple },
  { id: 12, top: "28%", left: "80%", img: personLast },
];

export default function HealthHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-tr from-blue-100 via-white to-cyan-100 flex items-center justify-center">
      <div className="absolute inset-0 z-10 mt-10 mb-20 mr-10">
        {characters.map((char) => (
          <motion.img
            key={char.id}
            src={char.img}
            alt="character"
            className="absolute w-12 sm:w-16 md:w-20"
            style={{ top: char.top, left: char.left }}
            initial={{ opacity: 0, scale: 0.75, y: 10 }}
            animate={{
              opacity: visible ? 1 : 0,
              scale: visible ? 1 : 0.75,
              y: visible ? 0 : 10,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: char.id * 0.1,
            }}
          />
        ))}
      </div>
      <div className="relative z-20 text-center px-4 mt-32 lg:10">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-blue-600 leading-tight drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Transforming Health
          <br />
          <span className="text-cyan-600">in the Digital Age</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-700 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Empowering communities with technology to build a healthier tomorrow.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <button className="px-8 py-3 bg-cyan-600 text-white text-lg font-semibold rounded-lg hover:bg-cyan-700 transition duration-300 ease-in-out">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
}
