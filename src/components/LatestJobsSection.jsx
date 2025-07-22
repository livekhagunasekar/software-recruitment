import { FaMapMarkerAlt, FaMoneyBillWave, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const jobs = [
  {
    tech: 'React Js',
    title: 'Frontend Developer',
    location: 'London, United Kingdom',
    salary: '£65,000',
    description:
      'Design and develop dynamic web interfaces with React, ensuring optimal performance and user experience.',
    date: '10/07/2025',
    bg: 'bg-[#FCDF69] text-blue-900',
  },
  {
    tech: 'Python',
    title: 'Backend Developer',
    location: 'London, United Kingdom',
    salary: '£65,000',
    description:
      'Build scalable backend services and APIs using Python, focusing on performance, security, and reliability.',
    date: '25/06/2025',
    bg: 'bg-[#064EA4] text-white',
  },
  {
    tech: 'Python',
    title: 'Software Engineer',
    location: 'London, United Kingdom',
    salary: '£65,000',
    description:
      'Contribute to full-stack development with Python, solving complex problems and driving technical excellence.',
    date: '22/07/2025',
    bg: 'bg-[#F99D76] text-blue-900',
  },
];

const LatestJobsSection = () => {
  return (
    <section className="bg-[#dce9f9] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-16"
          style={{ color: '#0059FF' }}
        >
            Latest Jobs
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
        {jobs.map((job, i) => (
            <div
            key={i}
            className={`rounded-3xl p-8 ${job.bg} flex flex-col justify-between shadow-lg`}
            >
            <div>
                <motion.span
                className="inline-block bg-white text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: false, amount: 0.2 }} 
                >
                {job.tech}
                </motion.span>

                <motion.h3
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2  }}
                viewport={{ once: false, amount: 0.2 }} 
                >
                {job.title}
                </motion.h3>

                <motion.div
                className="flex items-center gap-2 mb-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2  }}
                viewport={{ once: false, amount: 0.2 }} 
                >
                <FaMapMarkerAlt />
                <span>{job.location}</span>
                </motion.div>

                <motion.div
                className="flex items-center gap-2 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2  }}
                viewport={{ once: false, amount: 0.2 }} 
                >
                <FaMoneyBillWave />
                <span>{job.salary}</span>
                </motion.div>

                <motion.p
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2  }}
                viewport={{ once: false, amount: 0.2 }} 
                >
                {job.description}
                </motion.p>
            </div>

            <div>
                <motion.button
                className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-full mb-4 hover:bg-gray-100 transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.35 }}
                viewport={{ once: true }}
                >
                View this job
                </motion.button>

                <motion.p
                className="text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.4 }}
                viewport={{ once: true }}
                >
                {`Posted on ${job.date}`}
                </motion.p>
            </div>
            </div>
        ))}
        </div>



        {/* Bottom navigation */}
        <div className="flex justify-between items-center mt-12 flex-wrap gap-4">
          <div className="flex gap-4">
            <button className="bg-blue-900 text-white p-3 rounded-full">
              <FaArrowLeft />
            </button>
            <button className="bg-blue-900 text-white p-3 rounded-full">
              <FaArrowRight />
            </button>
          </div>
          <a href="#" className="text-blue-900 font-medium hover:underline">
            View more jobs
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestJobsSection;
