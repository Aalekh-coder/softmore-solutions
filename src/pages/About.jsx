import menChair from "@/assets/about/menChair.jpg";
import officeMeet from "@/assets/about/officeMeet.jpg";

import {
  Anvil,
  AppWindow,
  Atom,
  Chrome,
  Code,
  Earth,
  Eclipse,
  Eye,
  Figma,
  KeyboardMusic,
  PictureInPicture2,
  Shell,
  Store,
  TabletSmartphone,
  Waypoints,
} from "lucide-react";
import {motion} from "motion/react"

const About = () => {
  const work = [
    {
      icon: <AppWindow />,
      text: "Web Development",
      bgColor: "bg-teal-400",
    },
    {
      icon: <Figma />,
      text: "Web designing",
      bgColor: "bg-pink-400",
    },
    {
      icon: <TabletSmartphone />,
      text: "software Development",
      bgColor: "bg-blue-400",
    },
    {
      icon: <Store />,
      text: "E-commerce shop",
      bgColor: "bg-yellow-400",
    },
    {
      icon: <KeyboardMusic />,
      text: "Digital Marking",
      bgColor: "bg-red-400",
    },
    {
      icon: <Earth />,
      text: "SEO",
      bgColor: "bg-fuchsia-400",
    },
  ];
  const workFeatures = [
    {
      icon: <PictureInPicture2 />,
      text: "Fully Responsive",
      bgColor: "bg-red-400",
    },
    {
      icon: <PictureInPicture2 />,
      text: "Fully Responsive",
      bgColor: "bg-red-400",
    },
    {
      icon: <Chrome />,
      text: "Browser Compatibility",
      bgColor: "bg-orange-400",
    },
    {
      icon: <Eye />,
      text: "Retina Ready",
      bgColor: "bg-lime-400",
    },
    {
      icon: <Eclipse />,
      text: "Based On Tailwind 4",
      bgColor: "bg-emerald-400",
    },
    {
      icon: <Shell />,
      text: "Feather Icons",
      bgColor: "bg-cyan-400",
    },
    {
      icon: <Waypoints />,
      text: "Built With SASS",
      bgColor: "bg-sky-400",
    },
    {
      icon: <Code />,
      text: "Readable Code",
      bgColor: "bg-rose-400",
    },
  ];
  const workFeaturesCard = [
    {
      icon: <PictureInPicture2 size="40" className="mx-auto" />,
      text: "High Performance",
      description:
        "Our team delivers extraordinary results by exceeding expectations with high efficiency.",
      bgColor: "hover:bg-red-200",
    },
    {
      icon: <AppWindow size="40" className="mx-auto" />,
      text: "Best Team",
      description:
        "Our skilled professionals bring expertise and innovation to every project.",
      bgColor: "hover:bg-blue-200",
    },
    {
      icon: <Chrome size="40" className="mx-auto" />,
      text: "Effective Solutions",
      description:
        "We provide tailored solutions that align with your business goals and drive success.",
      bgColor: "hover:bg-orange-200",
    },
    {
      icon: <Eye size="40" className="mx-auto" />,
      text: "Efficiency",
      description:
        "Our streamlined processes ensure timely delivery without compromising quality.",
      bgColor: "hover:bg-lime-200",
    },
    {
      icon: <Eclipse size="40" className="mx-auto" />,
      text: "Cutting-Edge Technology",
      description:
        "We leverage the latest tools and frameworks to deliver innovative solutions.",
      bgColor: "hover:bg-emerald-200",
    },
    {
      icon: <Shell size="40" className="mx-auto" />,
      text: "Scalability",
      description:
        "Our solutions are designed to grow with your business, ensuring long-term success.",
      bgColor: "hover:bg-cyan-200",
    },
    {
      icon: <Waypoints size="40" className="mx-auto" />,
      text: "Client-Centric Approach",
      description:
        "We prioritize understanding your needs to deliver personalized solutions.",
      bgColor: "hover:bg-sky-200",
    },
    {
      icon: <Code size="40" className="mx-auto" />,
      text: "Reliable Support",
      description:
        "Our dedicated support team ensures your systems run smoothly at all times.",
      bgColor: "hover:bg-rose-200",
    },
  ];

  return (
    <div className="px-5 py-5 overflow-hidden">
      <motion.h1 initial={{
        opacity:0,
        x:50
      }} 
      whileInView={{
        opacity:1,
        x:0
      }}
      transition={{
        duration:0.5
      }}
      className="text-center font-bold text-4xl text-purple-950 lg:text-7xl">
        About Us
      </motion.h1>
      <div className="bg-gradient-to-r from-fuchsia-600 to-indigo-600 h-[6px] rounded-lg my-3 w-full lg:w-[30rem] mx-auto " />

      <div className="mt-10 lg:flex lg:items-start lg:gap-14 lg:px-10">
        <div className="flex items-center gap-4 lg:w-1/2 lg:mt-20 ">
          <motion.div initial={{
            opacity:0,
            x:-100,

          }}
          whileInView={{
            opacity:1,
            x:0
          }}
          transition={{
            duration:0.2
          }}
          >

            <img src="../about/boardwhitegirl.jpg" className="rounded-lg" />
          </motion.div>
          <motion.div 
          initial={{
            opacity:0,
            x:100,

          }}
          whileInView={{
            opacity:1,
            x:0
          }}
          transition={{
            duration:0.5
          }}
          className="flex flex-col gap-4">
            <motion.div initial={{
            opacity:0,
            x:100,

          }}
          whileInView={{
            opacity:1,
            x:0
          }}
          transition={{
            duration:0.5
          }}>
              <img src="../about/menChair.jpg" className="rounded-lg" />
            </motion.div>
            <div>
              <img src="../about/officeMeet.jpg" className="rounded-lg" />
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2">
          <p className="font-semibold text-xl my-6 lg:text-4xl">
            IT Solution for you Business
          </p>
          <motion.p initial={{
            x:100,
            opacity:0
          }}
          whileInView={{
            x:0,
            opacity:1
          }}
          transition={{
            duration:0.7
          }}
          className="text-gray-800 font-medium my-5 lg:text-lg">
            At{" "}
            <span className="bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-transparent bg-clip-text">
              Softmore IT Solutions
            </span>
            , we craft strategic software solutions across Web, Mobile, IoT, and
            Bots for businesses worldwide. Our refined technical expertise,
            innovative business approaches, and a team of skilled professionals
            empower us to tackle complex business challenges with high-quality,
            secure, and user-friendly software.
          </motion.p>

          <motion.p initial={{
            x:-100,
            opacity:0
          }}
          whileInView={{
            x:0,
            opacity:1
          }}
          transition={{
            duration:0.7
          }} className="text-gray-800 font-medium my-5 lg:text-lg">
            With extensive knowledge across diverse industry domains and
            proficiency in the latest development frameworks and tools,{" "}
            <span className="bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-transparent bg-clip-text">
              Softmore IT Solutions
            </span>{" "}
            delivers intelligent and sophisticated solutions tailored to every
            client and project.
          </motion.p>

          <motion.p initial={{
            x:-100,
            opacity:0
          }}
          whileInView={{
            x:0,
            opacity:1
          }}
          transition={{
            duration:0.7
          }} className="text-gray-800 font-medium my-5 lg:text-lg">
            Our dedicated teams guide you in choosing the right architecture and
            processes, ensuring the seamless delivery of your software projects.
            While you focus on running your business, we handle all your
            development needs with precision and care.
          </motion.p>

          <div className="border-b lg:my-10">
            <p className="flex items-center gap-3 text-lg my-2 font-semibold lg:text-2xl">
              <Atom className="lg:h-8 lg:w-8 text-blue-400" /> Technologies
            </p>
            <p className="font-medium text-gray-800 lg:text-lg">
              Our Software development activities are not limited to a single
              tech stack, we are well versed in several trending technologies
              which really makes our team very dynamic and competitive in the
              market
            </p>
          </div>

          <div className="border-b lg:my-10">
            <p className="flex items-center gap-3 text-xl my-2 font-semibold lg:text-2xl">
              <Anvil className="lg:h-8 lg:w-8 text-red-400" />
              Specialization​
            </p>
            <p className="font-medium text-gray-800 lg:text-lg">
              Our Software development activities are not limited to a single
              tech stack, we are well versed in several trending technologies
              which really makes our team very dynamic and competitive in the
              market
            </p>
          </div>
        </div>


      </div>

      {/* what we do  */}
      <div className="my-5 ">
        <p className="text-2xl text-center my-5 font-semibold lg:text-4xl lg:mt-10">
          What We Do ?
        </p>
        <p className="text-center font-medium my-5 text-gray-500 lg:text-xl">
          We{" "}
          <span className="bg-gradient-to-r from-fuchsia-600 to-blue-500 bg-clip-text text-transparent ">
            Softmore IT Solution
          </span>{" "}
          code and design your Businesses.
        </p>

        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-10 lg:ml-20">
          {work?.map((item, index) => {
            return (
              <motion.div whileHover={{
                scale:1.1
              }}   key={index} className="flex items-center gap-2 my-3 px-5 py-5 border rounded-xl shadow-lg m-3">
                <div className={`${item?.bgColor} p-3 rounded-full`}>
                  {item?.icon}
                </div>
                <p className="font-medium">{item?.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* what we do  */}
      <div className="my-5 mt-10 border-t lg:mt-20">
        <p className="text-2xl text-center my-5 font-semibold lg:text-4xl">
          Some Website Design Features
        </p>
        <p className="text-center font-medium my-5 text-gray-500 lg:text-xl">
          Key Features That Make Your{" "}
          <span className="bg-gradient-to-r from-fuchsia-600 to-blue-500 bg-clip-text text-transparent">
            Website Stand Out
          </span>
          .
        </p>

        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:px-8 lg:ml-20">
          {workFeatures?.map((item, index) => {
            return (
              <motion.div whileHover={{
                scale:1.1
              }}  key={index} className="flex items-center gap-2 my-3 px-5 py-5 m-3 border rounded-xl shadow-lg">
                <div className={`${item?.bgColor} p-3 rounded-full`}>
                  {item?.icon}
                </div>
                <p className="font-medium">{item?.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Features  */}
      <div className="my-5 mt-10 border-t">
        <p className="text-2xl text-center my-5 font-semibold lg:text-4xl">
          Features
        </p>
        <p className="text-center font-medium my-5 text-gray-500 lg:text-xl lg:px-28 ">
          Features which bring{" "}
          <span className="bg-gradient-to-r from-fuchsia-600 to-blue-500 bg-clip-text text-transparent">
            Softmore IT soultions{" "}
          </span>
          Technologies at top in top list of trusted service providers with
          peace of mind to generate awareness, drive traffic, connect people.
        </p>

        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:px-8 lg:ml-20">
          {workFeaturesCard?.map((item, index) => {
            return (
              <motion.div
              whileHover={{
                scale:1.2
              }}
              transition={{
                duration:0.4
              }}
                key={index}
                className={`px-5 py-4 text-center mx-5 my-5 ${item?.bgColor} border rounded-lg shadow-lg`}
              >
                <div className="">{item?.icon}</div>
                <div className="text-xl font-medium">{item?.text}</div>
                <div>{item?.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
