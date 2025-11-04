import React from 'react';
import { motion } from 'framer-motion';
import { Code, Trophy, Briefcase } from 'lucide-react';
import hackindore from '../../assets/hackilogo.jpeg';
import hackwave from '../../assets/hackwave.jpg';
import ksolves from '../../assets/ksolves.jpg';

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string[];
  image: string;
  icons: React.ReactNode;
  isIntern?: boolean;
}

const ExperienceJourney: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Software Development Intern",
      company: "Ksolves India Limited",
      date: "Jan 2024 - Present",
      image: ksolves,
      isIntern: true,
      icons: <Briefcase className="text-blue-500" size={40} />,
      description: [
        "Developing full-stack web applications using React and Node.js",
        "Learning and working with PostgreSQL and MySQL for database management",
        "Learning Docker and testing library (Jest)",
      ],
    },    
    {
      title: "Hackathon - HACK'NDORE",
      company: "IMC & Madhya Pradesh Government",
      date: "July 2024",
      image: hackindore,  
      icons:<Code className="text-purple-500" size={40} />,
      description: [
        "Competed in 'HACK'NDORE', a 48-hour National Level Hackathon with 800+ teams",
        "Shortlisted among the top 80 finalists across India.",
        "Built an e-office management system to streamline government processes",
        "Worked on a document management and workflow system"
      ],
    },
    {
      title: "Hackathon - Hackwave",
      company: "National Level Hackathon at CDGI",
      date: "Aug 2023",
      image: hackwave,
      icons: <Trophy className="text-blue-500" size={40} />,
      description: [
        "Secured Top 6 position in 'HACKWAVE', a 36-hour National Level Hackathon at CDGI",
        "Built an educational platform for students of different age groups to enhance learning experiences",
        "Incorporated interactive features to cater to diverse educational needs",
        "Demonstrated strong teamwork, rapid prototyping, and technical excellence during the event",
      ],
    }
  ];

  return (
    <section className="py-8 sm:py-16 bg-white min-h-screen flex items-center justify-center overflow-x-hidden">
      <div className="w-full px-4 max-w-[95%] mx-auto">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Journey
        </motion.h2>
  
        <div className="relative w-full overflow-hidden">
          {/* Vertical Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>
  
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`
                flex flex-col md:flex-row items-center mb-8 sm:mb-12 md:mb-16 relative overflow-hidden
                ${index % 2 === 0 ? "md:flex-row-reverse" : ""}
              `}
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Timeline Dot - Hidden on mobile */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-blue-500 z-10"></div>
  
              {/* Image Container */}
              <div
                className={`
                  w-full md:w-1/2 p-1 md:p-4 
                  ${index % 2 === 0 ? "md:pl-16" : "md:pr-16"}
                `}
              >
                <motion.div
                  className="w-full aspect-w-16 aspect-h-9 overflow-hidden rounded-xl shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                  />
                </motion.div>
              </div>
  
              {/* Content Container */}
              <div
                className={`
                  w-full md:w-1/2 bg-black text-white border-gray-800 rounded-xl p-3 sm:p-5 mt-4 md:mt-0
                  ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}
                `}
              >
                <div className="flex items-center space-x-2 sm:space-x-4 mb-3 sm:mb-4">
                  <div className="hidden md:block">{exp.icons}</div>
                  <div>
                    <h3 className="text-sm sm:text-base md:text-xl font-bold">{exp.title}</h3>
                    <p className="text-[10px] sm:text-xs md:text-base text-gray-400">
                      {exp.company} • {exp.date}
                    </p>
                  </div>
                </div>
  
                {exp.description.map((point, pointIndex) => (
                  <p key={pointIndex} className="text-[10px] sm:text-xs md:text-base text-gray-400 mb-1">
                    • {point}
                  </p>
                ))}
  
                {exp.isIntern && (
                  <div className="mt-2 sm:mt-4 text-[10px] sm:text-xs md:text-sm italic text-green-400">
                    Currently ongoing internship
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceJourney;