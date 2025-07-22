import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";

const logos = [
  { src: "/assets/microsoft.png", alt: "Microsoft" },
  { src: "/assets/oracle.png", alt: "Oracle" },
  { src: "/assets/atlassian.png", alt: "Atlassian" },
  { src: "/assets/cloudfare.png", alt: "Cloudflare" },
  { src: "/assets/vmware.png", alt: "VMware" },
];

const ClientsSection = () => {
  const controls = useAnimation();
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration: 30,
        ease: "linear",
      },
    });
  }, [controls]);

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration: 30,
        ease: "linear",
      },
    });
  };

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-lg md:text-2xl font-extrabold text-[#FF7722] drop-shadow-[2px_2px_6px_rgba(15,28,77,0.4)] font-sans mb-10">
        Supporting the World's Leading Enterprises
        </h2>




        <div
          className="relative w-full overflow-hidden transition-shadow duration-500 hover:shadow-[0_4px_20px_rgba(30,64,175,0.5)] rounded-lg"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
          <motion.div
            ref={marqueeRef}
            className="flex w-max gap-32"
            animate={controls}
          >
            {[...logos, ...logos].map((client, i) => (
              <img
                key={i}
                src={client.src}
                alt={client.alt}
                className="h-16 w-36 object-contain"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
