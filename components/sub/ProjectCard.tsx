import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] h-full flex flex-col">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-cover h-48 md:h-64"
      />

      <div className="relative p-4 flex-grow">
        <h1 className="text-xl md:text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-sm md:text-base text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
