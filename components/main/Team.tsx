import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Team: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 md:py-20" id="team">
      <h1 className="text-[30px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-6 md:py-10 text-center">
        Meet the Team
      </h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-4 md:px-10">
        <ProjectCard
          src="/team1.jpg"
          title="Abrham Abebe"
          description="Frontend Developer - Expert in React, animations, and responsive UI."
        />
        <ProjectCard
          src="/team2.jpg"
          title="Saron Tesfaye"
          description="Backend Developer - Specializes in APIs, databases, and performance."
        />
        <ProjectCard
          src="/team3.jpg"
          title="Lidya Mekonen"
          description="UI/UX Designer - Focused on clean design and user experience."
        />
      </div>

      <div className="mt-10 md:mt-20 text-center px-4">
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">Want to collaborate with us?</h2>
        <a
          href="#contact"
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full transition-all inline-block"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Team;

