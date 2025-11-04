import { useState, useEffect } from 'react';

// === ICONS ===
import clang from "/src/assets/clang.png";
import clogo from "/src/assets/clogo.png";
import hlogo from "/src/assets/hlogo.png";
import csslogo from "/src/assets/csslogo.png";
import jlogo from "/src/assets/jlogo.png";
import rlogo from "/src/assets/rlogo.png";
import glogo from "/src/assets/glogo.png";
import blogo from "/src/assets/blogo.png";
import tlogo from "/src/assets/tlogo.png";
import reduxlogo from "/src/assets/reduxlogo.png";
import nodelogo from "/src/assets/nodelogo.png";
import mysqllogo from "/src/assets/mysqllogo.png";
import typescript from "/src/assets/typescript.png";
import reactnative from "/src/assets/reactnative.png";
import appwrite from "/src/assets/appwrite.png";
import mongodb from "/src/assets/mongodb.png";
import Nextjs from "/src/assets/Nextjs.png";
import cloudinary from "/src/assets/cloudinary.svg";
import prisma from "../../assets/prisma.svg";
import postgress from "../../assets/postgress.png";
import query from "../../assets/reactquery.svg";
import java from "../../assets/java.svg";
import aws from "../../assets/aws.svg";

// AWS Icons (use real ones or placeholders)
import s3Icon from "../../assets/s3.svg";           // Replace with real S3 icon
import dynamodbIcon from "../../assets/dydb.svg"; // Replace with real DynamoDB icon
import lambdaIcon from "../../assets/Lambda.svg";     // Replace with real Lambda icon
import apigatewayIcon from "../../assets/apig.svg"; // Replace with real API Gateway icon

// Fallback to a placeholder if icons are missing
const fallbackIcon = "/src/assets/placeholder.svg"; // Optional: create a fallback

interface Skill {
  img: string;
  name: string;
  special?: boolean;
}

interface AWSService {
  name: string;
  logo: string;
}

const Skill = () => {
  const [showAWSModal, setShowAWSModal] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Detect mobile/small screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close modal on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowAWSModal(false);
    };
    if (showAWSModal) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [showAWSModal]);

  const awsServices: AWSService[] = [
    { name: "S3", logo: s3Icon || fallbackIcon },
    { name: "DynamoDB", logo: dynamodbIcon || fallbackIcon },
    { name: "Lambda", logo: lambdaIcon || fallbackIcon },
    { name: "API Gateway", logo: apigatewayIcon || fallbackIcon },
  ];

  const skillsByCategory: Record<string, Skill[]> = {
    "Frontend": [
      { img: hlogo, name: "HTML" },
      { img: csslogo, name: "CSS" },
      { img: jlogo, name: "JavaScript" },
      { img: rlogo, name: "React" },
      { img: typescript, name: "TypeScript" },
      { img: blogo, name: "Bootstrap" },
      { img: tlogo, name: "Tailwind CSS" },
      { img: query, name: "React Query" },
    ],
    "Backend": [
      { img: nodelogo, name: "Node.js" },
      { img: mysqllogo, name: "MySQL" },
      { img: mongodb, name: "MongoDB" },
      { img: appwrite, name: "Appwrite" },
      { img: postgress, name: "PostgreSQL" },
    ],
    "Programming": [
      { img: clang, name: "C" },
      { img: clogo, name: "C++" },
      { img: java, name: "Java" },
    ],
    "Tools & Technologies": [
      { img: glogo, name: "GitHub" },
      { img: Nextjs, name: "Next.js" },
      { img: cloudinary, name: "Cloudinary" },
      { img: reduxlogo, name: "Redux" },
      { img: reactnative, name: "React Native" },
      { img: prisma, name: "Prisma ORM" },
      { img: aws, name: "AWS", special: true },
    ],
  };

  return (
    <section id="skills" className="py-12 relative">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          <span className="relative inline-block">
            Skills
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform -skew-x-12"></div>
          </span>
        </h2>

        <div className="space-y-8">
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <div key={category} className="mb-8 last:mb-0">
              <h3 className="text-xl font-semibold mb-6 text-gray-700 text-center">{category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`
                      group relative flex flex-col items-center justify-center p-4 rounded-lg 
                      transition-all duration-300 hover:shadow-lg hover:-translate-y-1
                      w-full max-w-[120px] cursor-pointer select-none
                      ${skill.special ? 'ring-2 ring-orange-200 ring-offset-2' : ''}
                    `}
                    onClick={() => skill.special && setShowAWSModal(true)}
                    tabIndex={0}
                    role="button"
                    aria-label={`View ${skill.name} details`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        skill.special && setShowAWSModal(true);
                      }
                    }}
                  >
                    <div className="w-16 h-16 flex items-center justify-center mb-3 
                                  group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={skill.img}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-600 text-center 
                                   opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                   md:opacity-100">
                      {skill.name}
                    </span>
                    <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-10 
                                  rounded-lg transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AWS Modal - Responsive */}
      {showAWSModal && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
            onClick={() => setShowAWSModal(false)}
          />

          {/* Modal */}
          <div
            className={`
              fixed z-50 transition-all duration-300
              ${isMobile
                ? 'bottom-0 left-0 right-0 rounded-t-3xl p-6 pb-8 w-full'
                : 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl p-6 max-w-md w-full'
              }
              bg-white shadow-2xl border-2 border-orange-400
              ${isMobile ? 'animate-slideUp' : 'animate-fadeIn'}
            `}
          >
            {/* Mobile Handle */}
            {isMobile && (
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-12 h-1.5 bg-gray-300 rounded-full"></div>
            )}

            <div className="flex justify-between items-center mb-5">
              <h4 className="font-bold text-gray-800 text-lg md:text-xl">AWS Services</h4>
              <button
                onClick={() => setShowAWSModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-light transition-colors"
                aria-label="Close modal"
              >
                ×
              </button>
  </div>

            <div className="grid grid-cols-2 gap-4">
              {awsServices.map((service, idx) => (
                <div
                  key={service.name}
                  className="flex flex-col items-center justify-center p-4 rounded-xl
                           bg-gradient-to-br from-orange-50 to-orange-100
                           hover:shadow-md hover:from-orange-100 hover:to-orange-200
                           transition-all duration-200 border border-orange-200"
                  style={{
                    animation: `slideUp 0.3s ease-out ${idx * 0.1}s both`,
                  }}
                >
                  <div className="w-14 h-14 flex items-center justify-center mb-2
                               bg-white rounded-lg p-2 shadow-sm">
                    <img
                      src={service.logo}
                      alt={service.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs font-semibold text-gray-700 text-center">
                    {service.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Skill;