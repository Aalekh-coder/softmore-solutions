import Button from "@/components/miniComp/button/Button";
import GeminiBtn from "@/components/miniComp/button/GeminiBtn";
import PinkBtn from "@/components/miniComp/button/PinkBtn";
import { easeIn, motion } from "motion/react";
import project1 from "../../../public/project1.png";
import project2 from "../../../public/project2.png";
import project3 from "../../../public/project3.png";
import project4 from "../../../public/project4.png";
import project5 from "../../../public/projects5.png";
import project6 from "../../../public/project6.png";

import React from "react";

const project = [
  {
    id: 1,
    title: "project1",
    image: project1,
    decription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veniam in repellendus officia, iusto labore vel! Delectus asperiores error",
  },
  {
    id: 2,
    title: "project2",
    image: project2,
    decription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veniam in repellendus officia, iusto labore vel! Delectus asperiores error",
  },
  {
    id: 3,
    title: "project3",
    image: project3,
    decription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veniam in repellendus officia, iusto labore vel! Delectus asperiores error",
  },
  {
    id: 4,
    title: "project4",
    image: project4,
    decription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veniam in repellendus officia, iusto labore vel! Delectus asperiores error",
  },
  {
    id: 5,
    title: "project4",
    image: project5,
    decription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veniam in repellendus officia, iusto labore vel! Delectus asperiores error",
  },
  {
    id: 6,
    title: "project4",
    image: project6,
    decription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veniam in repellendus officia, iusto labore vel! Delectus asperiores error",
  },
];

const Work = () => {
  return (
    <div className=" mt-10 px-4 lg:px-20">
      <motion.h1
        initial={{
          x: -50,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
        className="text-4xl hover:underline bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent font-bold"
      >
        Our work
      </motion.h1>
      <div className="md:flex md:gap-3">
        <motion.p
          initial={{
            x: -50,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mt-5 mb-5 md:w-[50vw] lg:w-[30vw]"
        >
          Digital Silk is a web design company &{" "}
          <span className="text-blue-950 ">digital marketing</span> agency
          focused on growing brands online. We create effective brand
          strategies, custom web design, development, and digital marketing
          solutions to generate greater brand engagement and conversions.
        </motion.p>

        <motion.p
          initial={{
            x: -50,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="md:w-[50vw] md:mt-14 lg:w-[20vw] mb-5 "
        >
          We work closely with our clients to ensure each project meets their
          brand guidelines and business goals and provide technical and
          marketing expertise to ensure optimal results.
        </motion.p>
      </div>
      <GeminiBtn />

      {/* projects  */}

      <div className="flex flex-col mt-5 mb-5">
        {project?.map((item, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="w-full mt-5 flex flex-col lg:flex-row gap-5 lg:items-center md:gap-14 border-b-2 my-3"
            >
              <motion.div
                whileHover={{
                  x: 30,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.3,
                  ease: easeIn,
                }}
                className="w-full h-full "
              >
                <img src={item?.image} />
              </motion.div>

              <div className=" flex flex-col mb-10">
                <p className="font-bold text-3xl ">{item?.title}</p>
                <p className="text-sm">{item?.decription}</p>
               
               <button className="px-4 py-2 bg-gradient-to-r from-fuchsia-600 to-indigo-600 rounded-lg my-2 mb-5">
                Visit
               </button>

              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
