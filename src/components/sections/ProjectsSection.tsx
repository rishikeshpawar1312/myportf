import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Construction, X, Smartphone, Stars } from 'lucide-react';
import bloghive from '../../assets/Bloghive.png'
import chatty from '../../assets/chatty.png'
import webimpact from '../../assets/webimpact.png'
import sd from '../../assets/sd.png'

interface Project {
  title: string;
  description: string;
  tech: string[];
  liveLink: string;
  githubLink: string;
  image: string;
  isMobileApp?: boolean;
}

const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  githubLink: string;
}> = ({ isOpen, onClose, title, githubLink }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <section id='project'> 
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/30" onClick={onClose} />
        
        <div className="relative bg-white rounded-xl shadow-lg max-w-md w-full p-6 transform transition-all">
          <div className="absolute right-4 top-4">
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mt-2">
            <div className="flex items-center gap-2 mb-4">
              <Construction className="text-orange-500" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">
                Work in Progress
              </h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600">
                The live demo for <span className="font-semibold text-gray-900">{title}</span> is 
                currently under development. We're adding finishing touches to make it perfect!
              </p>
              
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                <p className="text-sm text-orange-800">
                  Expected completion: Coming soon! In the meantime, you can explore 
                  the codebase to see what's being built.
                </p>
              </div>

              <div className="pt-4">
                <a 
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-black/80 transition-colors"
                >
                  <Github size={18} />
                  Check out the code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

const ProjectCard: React.FC<Project> = ({ 
  title, 
  description, 
  tech, 
  liveLink, 
  githubLink, 
  image,
  isMobileApp 
}) => {
  const [showModal, setShowModal] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleLiveDemoClick = (e: React.MouseEvent) => {
    if (!liveLink) {
      e.preventDefault();
      setShowModal(true);
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  if (isMobileApp) {
    return (
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <Smartphone className="text-purple-600" size={24} />
            <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
              Mobile App
            </span>
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
              <Stars size={14} />
              Coming Soon
            </span>
          </div>

          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
          <p className="text-gray-600">{description}</p>

          <div className="flex flex-wrap gap-2 my-4">
            {tech.map((technology, index) => (
              <span 
                key={index} 
                className="px-3 py-1.5 bg-white/50 text-purple-700 text-sm rounded-full border border-purple-100"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Construction size={18} /> Preview Coming Soon
            </button>
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-black/80 transition-colors"
            >
              <Github size={18} /> View Code
            </a>
          </div>
        </div>

        <Modal 
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title={title}
          githubLink={githubLink}
        />
      </div>
    );
  }

  return (
    <>
    <section id='project'> 
      <div className="bg-white border border-black/10 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
        <div className="relative w-full h-52 bg-gradient-to-b from-white">
          {!imageError ? (
            <>
              <img 
                src={image} 
                alt={title}
                onError={handleImageError}
                className="absolute inset-0 w-full h-full object-contain p-4"
              />
              <div className="absolute inset-0" />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <h3 className="text-3xl font-serif text-white">{title}</h3>
            </div>
          )}
        </div>
        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-bold text-black mb-3">{title}</h3>
          <p className="text-black/70 mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((technology, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-black/5 text-black/80 text-xs rounded-full"
              >
                {technology}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4">
            {liveLink ? (
              <a 
                href={liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            ) : (
              <button
                onClick={handleLiveDemoClick}
                className="flex items-center gap-2 text-sm text-orange-500 hover:text-orange-600 transition-colors"
              >
                <Construction size={16} /> Live Demo
              </button>
            )}
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              <Github size={16} /> Code
            </a>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={title}
        githubLink={githubLink}
      />
      </section>
    </>
  );
};

const ProjectsSection: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const projects: Project[] = [
    {
      "title": "Student Dashboard",
      "description": "A comprehensive student dashboard designed for productivity and collaboration. Features include LeetCode integration, real-time chat, study planner, to-do list, and more.",
      "tech": ["Next.js 14.2.16", "React", "Prisma", "MongoDB", "Tailwind CSS", "NextAuth"],
      "liveLink": "",
      "githubLink": "https://github.com/rishikeshpawar1312/dashboard",
      "image": sd,
    },
    {
      "title": "BlogHive",
      "description": "A blog website that enables users to create and manage posts. It offers secure authentication, a rich text editor, and a modern, responsive UI.",
      "tech": ["React", "Redux", "Appwrite", "TinyMCE", "Tailwind CSS"],
      "liveLink": "https://blogwebsite-kohl.vercel.app/",
      "githubLink": "https://github.com/rishikeshpawar1312/blogwebsite",
      "image": bloghive
    },    
    {
      "title": "WebImpact",
      "description": "A learning platform that integrates YouTube educational content with custom progress tracking. Includes a verification system to track video completion and real-time communication for feedback between learners and educators.",
      "tech": ["YouTube Data API", "EmailJS", "JavaScript", "SQLite", "Ruby on Rails"],
      "liveLink": "",
      "githubLink": "https://github.com/priyaup/smart-education-application",
      "image": webimpact,
    },
    {
      "title": "Chatty",
      "description": "A real-time chat application built with the MERN stack and Socket.IO, featuring a modern UI with ShadCN and Tailwind CSS.",
      "tech": ["MongoDB", "Express.js", "React", "Node.js", "Socket.IO", "ShadCN", "Tailwind CSS"],
      "liveLink": "",
      "githubLink": "https://github.com/rishikeshpawar1312/chatapp",
      "image": chatty
    },
    {
      "title": "Civic Action",
      "description": "A revolutionary mobile app that empowers citizens to engage with their local community, report civic issues, and track resolution progress in real-time. Features include geo-location tagging, photo documentation, and status tracking.",
      "tech": ["React Native", "Expo","Google Maps API", "Node.js","Ruby on Rails"],
      "liveLink": "",
      "githubLink": "https://github.com/rishikeshpawar1312/civic",
      "image": "",
      "isMobileApp": true
    },
  ];

  const displayProjects = showMore ? projects : projects.slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="text-center mt-8">
          {!showMore ? (
            <button 
              onClick={() => setShowMore(true)}
              className="text-black font-medium hover:text-black/70 transition-colors"
            >
              View More Projects
            </button>
          ) : (
            <button 
              onClick={() => setShowMore(false)}
              className="text-black font-medium hover:text-black/70 transition-colors"
            >
              Show Less Projects
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;