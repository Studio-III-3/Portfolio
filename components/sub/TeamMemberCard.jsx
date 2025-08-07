import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TeamMemberCard = ({ src, name, role, description }) => {
  return (
    <motion.div
      className="bg-gray-900 rounded-xl p-6 w-full md:w-1/3 text-center shadow-lg hover:shadow-cyan-500/30 transition"
      whileHover={{ scale: 1.08, rotate: 2 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-28 h-28 mx-auto mb-4">
        <Image
          src={src}
          alt={name}
          fill
          className="rounded-full object-cover border-4 border-cyan-500"
        />
      </div>
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="text-cyan-400">{role}</p>
      <p className="text-gray-300 mt-2">{description}</p>
    </motion.div>
  );
};

export default TeamMemberCard;