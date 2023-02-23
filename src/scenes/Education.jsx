import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">Education</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7"></p>
        </motion.div>
      </div>

      <div style={{ margin: "0 0 0 25vw" }}>
        <div className="relative h-32">
          <div className="z-10">
            <p className="font-playfair font-semibold text-3xl mt-3">Collage</p>
          </div>
          <div className="w-1/2 md:w-3/4 h-32 absolute right-0 top-0 z-[-1]" />
          <p className="mt-5">
            As a front-end web developer, I possess a wide range of technical
            skills that allow me to design and build visually appealing,
            user-friendly websites. My technical skillset includes proficiency
            in HTML, CSS, JavaScript, and Bootstrap, ReactJS.
          </p>
        </div>
        <div className="relative h-32">
          <div className="z-10">
            <p className="font-playfair font-semibold text-5xl"></p>
            <p className="font-playfair font-semibold text-3xl mt-3">
              High School
            </p>
          </div>
          <div className="w-1/2 md:w-3/4 h-32 absolute right-0 top-0 z-[-1]" />
          <p className="mt-5">
            As a front-end web developer, I possess a wide range of technical
            skills that allow me to design and build visually appealing,
            user-friendly websites. My technical skillset includes proficiency
            in HTML, CSS, JavaScript, and Bootstrap, ReactJS.
          </p>
        </div>
        <div className="relative h-32">
          <div className="z-10">
            <p className="font-playfair font-semibold text-5xl"></p>
            <p className="font-playfair font-semibold text-3xl mt-3">
              Student Activity
            </p>
          </div>
          <div className="w-1/2 md:w-3/4 h-32 absolute right-0 top-0 z-[-1]" />
          <p className="mt-5">
            As a front-end web developer, I possess a wide range of technical
            skills that allow me to design and build visually appealing,
            user-friendly websites. My technical skillset includes proficiency
            in HTML, CSS, JavaScript, and Bootstrap, ReactJS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
