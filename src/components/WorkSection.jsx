import React from 'react';
import { motion } from 'framer-motion';
import Plus from '../assets/Group-7842.png';

function OurWorkSection() {
  return (
    <div className="bg-blue-900 text-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Left Section */}
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-snug">
            Our work centres around three key objectives to accelerate the digital transformation of health:
          </p>

          <div className="h-1 w-16 bg-yellow-400 mb-8 rounded" />

          <div className="space-y-6">
            {[
              "Building Political Will and Creating an Enabling Environment",
              "Strengthening Health Data Governance",
              "Ensuring More and Better Funding For Digital Health Transformation"
            ].map((text, index) => (
              <motion.div 
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
                viewport={{ once: true }}
              >
                <img src={Plus} alt="plus" className="w-5 h-5 mr-3 mt-1" />
                <p className="text-lg sm:text-xl font-medium">{text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-10 w-fit text-yellow-400 text-lg sm:text-xl font-bold flex items-center gap-2 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
          >
            <span className="">
              LEARN MORE ABOUT OUR WORK
            </span>
            <motion.span 
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div 
          className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            {
              title: "WE ADVOCATE",
              text: "For inclusive policies, political leadership, and enabling environments.",
            },
            {
              title: "WE INNOVATE",
              text: "By embracing emerging technologies for scalable health solutions.",
            },
            {
              title: "WE COLLABORATE",
              text: "Partnering with global leaders, communities & innovators.",
            },
            {
              title: "WE ACCELERATE",
              text: "Driving the digital transformation of health systems worldwide.",
            },
          ].map((card, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 border border-blue-500/30 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-xl transition-transform hover:scale-[1.03]"
            >
              <p className="text-yellow-300 text-lg sm:text-xl font-bold mb-2">{card.title}</p>
              <p className="text-white text-sm sm:text-base leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}

export default OurWorkSection;
