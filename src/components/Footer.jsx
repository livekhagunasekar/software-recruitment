import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#064EA4] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm">

        {/* Branding and Social Icons */}
        <div>
          <h2 className="text-xl font-bold mb-4 tracking-wide">Software Recruitment Co.</h2>
          <p className="text-gray-200 mb-4">Connecting top tech talent with leading companies.</p>
          <div className="flex items-center gap-3">
            {[FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter].map((Icon, idx) => (
              <a key={idx} href="#" className="bg-white text-[#064EA4] p-2 rounded-full hover:bg-[#FCDF69] hover:text-black transition-all">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <div>
          <h2 className="text-lg font-semibold mb-4 border-b-2 border-[#FCDF69] inline-block pb-1">Explore</h2>
          <ul className="space-y-2 text-gray-100">
            {["Homepage", "For jobseekers", "For clients", "Our sectors", "Resources", "Contact us"].map((item, idx) => (
              <li key={idx}><a href="#" className="hover:text-[#FCDF69] transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Sectors */}
        <div>
          <h2 className="text-lg font-semibold mb-4 border-b-2 border-[#FCDF69] inline-block pb-1">Sectors</h2>
          <ul className="space-y-2 text-gray-100">
            {["Software engineering", "DevOps", "Cloud", "Infrastructure", "Testing", "Security"].map((item, idx) => (
              <li key={idx}><a href="#" className="hover:text-[#FCDF69] transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold mb-4 border-b-2 border-[#FCDF69] inline-block pb-1">Platform</h2>
          <ul className="space-y-2 text-gray-100">
            {["Recruitment Websites & Career Portals", "Marketing Tools", "Integrations", "AI Recruiter", "Feedback & Retention Management Platform", "Customer Support Hub"].map((item, idx) => (
              <li key={idx}><a href="#" className="hover:text-[#FCDF69] transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-blue-700 pt-6 text-center text-xs text-gray-300">
        &copy; {new Date().getFullYear()} Software Recruitment Co. | Built with ❤️ by Livekha Gunasekar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
