import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

const Summery = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scaleValue = Math.min(1 + scrollY / 1000, 1.5); // Scale up to 1.5
      controls.start({ scale: scaleValue });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div
      className="w-full px-4 overflow-hidden mt-10 pt-5"
      style={{ fontFamily: "'Cal Sans', sans-serif" }}
    >
      <motion.h2
        className="text-sm md:text-xl lg:text-3xl px-5 text-center bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent font-bold mb-5"
        
        animate={controls}
        initial={{ scale: 1 }}
        transition={{
          duration: 0.2,
        }}
      >
        Creative Web Agency Delivering Custom Solutions
      </motion.h2>

      <div className="lg:flex lg:items-center lg:gap-4 lg:mt-3 lg:px-12">
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="https://www.ntc.edu/sites/default/files/styles/full_width_16_9/public/2021-06/web-design-header.jpg?itok=4d7TmUMl"
          className="mt-4 rounded-lg lg:w-1/2"
        />

        <motion.p
          style={{ fontFamily: "'Oswald', sans-serif" }}
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 0.8 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="lg:w-1/2 lg:text-lg lg:px-5"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quis
          aut iste hic! Voluptatem mollitia perferendis iusto similique hic,
          quisquam porro exercitationem sapiente cupiditate eos accusamus,
          excepturi, magnam quasi esse aliquam laborum temporibus minus odit
          unde deleniti. Rem quas hic laborum pariatur nihil, corrupti earum
          obcaecati quasi nam similique voluptatum molestias amet iusto a!
          Aliquam illum cum possimus molestiae, sunt corporis beatae omnis
          temporibus eos, voluptates quis ipsum dolor reiciendis voluptas
          nostrum dicta sit sint, maxime quasi assumenda iusto alias repellat
          fuga mollitia. Obcaecati, voluptate dolore! Eum modi maxime molestias
          earum ullam, ipsa at nostrum reiciendis totam. Illum, mollitia nam.
        </motion.p>
      </div>


  
    </div>
  );
};

export default Summery;


<motion.p
  className="font-extrabold text-4xl mt-6 md:text-5xl md:mt-9 lg:text-8xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.8 }}
>
  We Grow Brands Online
</motion.p>