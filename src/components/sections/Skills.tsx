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
import  prisma from "/src/assets/prisma.svg";
import  postgress from "/src/assets/postgress.png";
import  docker from "../../assets/docker.png";
import query from "../../assets/reactquery.svg"
import java from "../../assets/java.svg"

const Skill = () => {
  const skillsByCategory = {
    "Frontend": [
      { img: hlogo, name: "HTML" },
      { img: csslogo, name: "CSS" },
      { img: jlogo, name: "JavaScript" },
      { img: rlogo, name: "React" },
      { img: typescript, name: "TypeScript" },
      { img: blogo, name: "Bootstrap" },
      { img: tlogo, name: "Tailwind CSS" },
      { img: query, name: "React Query" }
    ],
    "Backend": [
      { img: nodelogo, name: "Node.js" },
      { img: mysqllogo, name: "MySQL" },
      { img: mongodb, name: "MongoDB" },
      { img: appwrite, name: "Appwrite" },
      { img:  postgress, name: "Postgresql" }
    ],
    "Programming": [
      { img: clang, name: "C" },
      { img: clogo, name: "C++" },
      { img: java, name: "Java" }

    ],
    "Tools & Technologies": [
      { img: glogo, name: "GitHub" },
      { img: Nextjs, name: "Next.js" },
      { img: cloudinary, name: "Cloudinary" },
      { img: reduxlogo, name: "Redux" },
      { img: reactnative, name: "React Native" },
      { img:  prisma, name: "Prisma ORM" },
      { img:  docker, name: "Docker" }

    ]
  };

  return (
    <section id="skills" className="py-12">
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
                    className="group relative flex flex-col items-center justify-center p-4 rounded-lg 
                             transition-all duration-300 hover:shadow-lg hover:-translate-y-1
                             w-full max-w-[120px]"
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
                                   opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
    </section>
  );
};

export default Skill;