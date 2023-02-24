import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const MySkills = () => {
  return (
    <section id="education" className="pt-10 pb-24">
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

      <div style={{ margin: "0 0 0 20vw" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative h-42">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-3">
                Collage
              </p>
            </div>
            <p className="mt-5">
              As a 2nd year Communication student at Alexandria Engineering
              College, I have achieved a GPA of over 3.3, demonstrating my
              commitment to academic excellence and dedication to my studies.
            </p>
          </div>
          <div className="relative h-42">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-3">
                High School
              </p>
            </div>
            <p className="mt-5">
              During my secondary school years at Mohammed Karim School and
              primary years at MLS School, I consistently earned a high academic
              achievement, maintaining an average of 95% throughout three years,
              demonstrating my dedication and hard work in my studies.
            </p>
          </div>
          <div className="relative h-42">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-3">
                Student Activity
              </p>
            </div>
            <p className="mt-5">
              As a class delegate for two years, I collaborated closely with
              doctors and their assistants, demonstrating my strong
              communication and leadership skills in the student activities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
