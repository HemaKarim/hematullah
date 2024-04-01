import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <br className="sm:block hidden" />
            <TypeAnimation
              sequence={["Hematullah", 5000, "", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A versatile Engineer combines mechanical and software expertise,
            seamlessly integrating hardware and software for enhanced
            functionality.
          </p>
          <br />
          <div style={{ display: "flex", alignItems: "center" }}>
            <a
              href="https://raw.githubusercontent.com/HemaKarim/Resume/main/Hematullah_Karimzada_Resume_2024_Final.pdf"
              download="Hematullah_Karimzada_Resume_2024.pdf"
              style={{
                backgroundColor: "white",
                color: "black",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Download Resume/CV
            </a>
            <a
              href="https://www.linkedin.com/in/hematullah/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              style={{ marginLeft: "100px", marginRight: "100px" }}
            >
              <img
                src="https://static-exp1.licdn.com/sc/h/1bt1uwq5akv756knzdj4l6cdc"
                alt="LinkedIn"
                width="50"
                height="50"
              />
            </a>
            <a
              href="https://github.com/HemaKarim"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <img
                src="https://github.com/fluidicon.png"
                alt="GitHub"
                width="50"
                height="50"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
