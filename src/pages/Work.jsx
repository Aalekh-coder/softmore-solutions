import Button from "@/components/miniComp/button/Button";
import GeminiBtn from "@/components/miniComp/button/GeminiBtn";
import PinkBtn from "@/components/miniComp/button/PinkBtn";

import React from "react";

const project = [
  {
    id: 1,
    title: "project1",
    image: "https://img.freepik.com/free-vector/flat-psychologist-landing-page-template_23-2150041435.jpg?semt=ais_hybrid&w=740",
    decription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veniam in repellendus officia, iusto labore vel! Delectus asperiores error",
  },
  {
    id: 2,
    title: "project2",
    image: "https://cdn.prod.website-files.com/65bb7884c67879aa0d84f24e/65c0eb721ea864f342f436f8_What-are-landing-pages-and-why-do-you-need-to-use-them.jpeg",
    decription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veniam in repellendus officia, iusto labore vel! Delectus asperiores error",
  },
  {
    id: 3,
    title: "project3",
    image: "https://neilpatel.com/wp-content/uploads/2023/06/Best_landing_pages3-700x397.jpg",
    decription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veniam in repellendus officia, iusto labore vel! Delectus asperiores error",
  },
  {
    id: 4,
    title: "project4",
    image: "https://elements-resized.envatousercontent.com/elements-cover-images/30c47f20-c1d9-4b1b-a5f1-eec77e026ade?w=433&cf_fit=scale-down&q=85&format=auto&s=12a0a8c59c06393a079a32d50fe8454115a5a21b9371219b878af7e334a627f0",
    decription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veniam in repellendus officia, iusto labore vel! Delectus asperiores error",
  },
];

const Work = () => {
  return (
    <div className="h-[100vh] mt-10 px-4 lg:px-20">
      <h1 className="text-3xl font-semibold hover:underline">Our work</h1>
      <div className="md:flex md:gap-3">
        <p className="mt-5 mb-5 md:w-[50vw] lg:w-[30vw]">
          Digital Silk is a web design company &{" "}
          <span className="text-blue-950 ">digital marketing</span> agency
          focused on growing brands online. We create effective brand
          strategies, custom web design, development, and digital marketing
          solutions to generate greater brand engagement and conversions.
        </p>

        <p className="md:w-[50vw] md:mt-14 lg:w-[20vw] mb-5 ">
          We work closely with our clients to ensure each project meets their
          brand guidelines and business goals and provide technical and
          marketing expertise to ensure optimal results.
        </p>
      </div>
      <GeminiBtn />

      {/* projects  */}
      <div>
        {project.map((item, index) => {
          return (
            <div className={`w-full h-[90vh] lg:flex ${index%2===0?"lg:flex-row-reverse":""}`}>
              <div className="lg:w-1/2">
                <img
                  src={item?.image}
                  alt=""
                />
              </div>
              <div className="px-4 lg:mt-20 lg:w-1/2 lg:px-20">
                <p className="font-semibold mt-5 text-5xl">{item?.title}</p>
                <p className="text-sm mt-3 mb-4">
                 {item?.decription}
                </p>
                <PinkBtn text={"View project"} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
