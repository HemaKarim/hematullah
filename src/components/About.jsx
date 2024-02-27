import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, description, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[16px] font-bold text-center'>
          {title}
        </h3>

        <h3 className='text-white text-[16px] font-bold text-center'>
          {description}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}></p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a highly motivated individual with a Bachelor of Engineering in 
        Mechanical Engineering with a Mechatronics stream from 
        Toronto Metropolitan University (formerly Ryerson University). 
        Driven by a deep passion for both the mechanical and software engineering 
        fields, I possess a versatile skill set that spans across various programming
        languages, including Python, C, C#, C++, HTML5/CSS3, and JavaScript. 
        Additionally, I am proficient in frameworks such as React, Angular, Django and Flask, 
        alongside expertise in CAD software like AutoCAD and SolidWorks. 
        With a strong foundation in both domains, I excel in crafting innovative 
        solutions that seamlessly integrate hardware and software components. 
        My analytical mindset, coupled with strong problem-solving abilities, 
        enables me to navigate complex challenges with ease. I am committed to 
        leveraging my education and skills to drive impactful advancements in both
        mechanical and software engineering realms.
      </motion.p>

      <h2 className={styles.sectionHeadText}>Education.</h2>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
