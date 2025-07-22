import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaFileUpload,
  FaEnvelope,
  FaSearch,
  FaSuitcase,
  FaUserTie,
  FaBriefcase,
  FaQuoteRight,
  FaBook,
  FaLightbulb,
  FaCode,
  FaCloud,
  FaServer,
  FaBug,
  FaShieldAlt
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Dropdown = ({ title, items }) => {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 font-semibold text-[#451B09]">
        {title}
        <span className="ml-1 text-xs">▼</span>
      </button>
      <div className="absolute z-50 mt-2 w-48 rounded-md bg-white shadow-lg py-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="flex items-center gap-2 px-4 py-2 text-sm text-[#451B09] hover:bg-gray-100"
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  const jobseekerItems = [
    { label: "Find Jobs", link: "/find-jobs", icon: <FaSearch /> },
    { label: "Upload CV", link: "/upload-cv", icon: <FaFileUpload /> },
    { label: "Career Advice", link: "/career-advice", icon: <FaLightbulb /> }
  ];

  const clientItems = [
    { label: "Hire Talent", link: "/hire-talent", icon: <FaUserTie /> },
    { label: "Recruitment Solutions", link: "/solutions", icon: <FaBriefcase /> },
    { label: "Testimonials", link: "/testimonials", icon: <FaQuoteRight /> }
  ];

  const resourceItems = [
    { label: "Blog", link: "/blog", icon: <FaBook /> },
    { label: "Guides", link: "/guides", icon: <FaLightbulb /> }
  ];

  const sectorItems = [
    { label: "Software Engineering", link: "/sectors/software", icon: <FaCode /> },
    { label: "DevOps", link: "/sectors/devops", icon: <FaServer /> },
    { label: "Cloud", link: "/sectors/cloud", icon: <FaCloud /> },
    { label: "Infrastructure", link: "/sectors/infrastructure", icon: <FaServer /> },
    { label: "Testing", link: "/sectors/testing", icon: <FaBug /> },
    { label: "Security", link: "/sectors/security", icon: <FaShieldAlt /> }
  ];

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
  <nav className="w-full bg-white shadow p-4 mb-0">
    <div className="flex justify-between items-center max-w-7xl mx-auto">
      {/* Logo / Company Title */}
      <motion.div
        animate={{
          scale: [1, 1.03, 1],
          textShadow: [
            "0px 0px 0px rgba(0,0,0,0.2)",
            "0px 0px 8px rgba(59,130,246,0.8)",
            "0px 0px 0px rgba(0,0,0,0.2)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 12px rgba(59,130,246,1)",
        }}
        className="flex-shrink-0"
      >
        <Link to="/" className="text-blue-600 font-bold text-xl">
          Software Recruitment Co.
        </Link>
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 items-center ml-auto">
        <Dropdown title="For Jobseekers" items={jobseekerItems} />
        <Dropdown title="For Clients" items={clientItems} />
        <Dropdown title="Resources" items={resourceItems} />
        <Dropdown title="Sectors" items={sectorItems} />

        <Link
          to="/upload-cv"
          className="flex items-center gap-2 px-5 py-2 rounded-full font-bold text-[#451B09]"
          style={{ background: "#FCDF69" }}
        >
          <FaFileUpload />
          Upload CV
        </Link>
        <Link
          to="/contact"
          className="flex items-center gap-2 px-5 py-2 rounded-full font-bold text-[#451B09]"
          style={{ background: "#F99D76" }}
        >
          <FaEnvelope />
          Contact Us
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden ml-auto">
        <button onClick={() => setIsMobileOpen(!isMobileOpen)}>
          <svg
            className="w-6 h-6 text-[#451B09]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                !isMobileOpen
                  ? "M4 6h16M4 12h16M4 18h16"
                  : "M6 18L18 6M6 6l12 12"
              }
            />
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Dropdown Menu */}
    {isMobileOpen && (
      <div className="md:hidden flex flex-col gap-4 mt-4 px-4">
        <Dropdown title="For Jobseekers" items={jobseekerItems} />
        <Dropdown title="For Clients" items={clientItems} />
        <Dropdown title="Resources" items={resourceItems} />
        <Dropdown title="Sectors" items={sectorItems} />

        <Link
          to="/upload-cv"
          className="flex items-center justify-center gap-2 px-5 py-2 rounded-full font-bold text-[#451B09]"
          style={{ background: "#FCDF69" }}
        >
          <FaFileUpload />
          Upload CV
        </Link>
        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 px-5 py-2 rounded-full font-bold text-[#451B09]"
          style={{ background: "#F99D76" }}
        >
          <FaEnvelope />
          Contact Us
        </Link>
      </div>
    )}
  </nav>
);
};

export default Navbar;
