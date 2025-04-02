import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import type { Project } from "~/utils/definitions";

const ProjectItem = ({ project }: { project: Project }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClik = () => {
    setShowInfo(!showInfo);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`relative flex items-center justify-center h-auto w-full shadow-lg shadow-primary/40 rounded-xl group hover:bg-gradient-to-r from-primary/50 to-base-300 ease-linear duration-300 overflow-hidden ${isOpen ? "bg-gradient-to-r from-primary/50 to-base-300" : ""}`}
      onClick={toggleOpen}
    >
      <img
        src={project.img}
        alt={project.title}
        className={`rounded-xl ${isOpen ? "opacity-10" : "group-hover:opacity-10"}`}
      />
      <div
        className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center ease-linear duration-1000 ${isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
      >
        <h3 className="md:text-2xl text-xl font-bold text-yellow-100 tracking-wider text-center mb-4">
          {project.title}
        </h3>
        <div className="flex text-gray-300 w-full max-w-full justify-around pt-2 mb-6 lg:mb-10">
          {project?.icons.map((icon, index) => (
            <span key={index}>{icon}</span>
          ))}
        </div>
        {showInfo ? (
          <span className="btn btn-primary btn-disabled cursor-not-allowed">
            {project.action}
          </span>
        ) : (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className={`btn btn-primary ${!isOpen ? "pointer-events-none" : ""}`}
            onClick={(e) => e.stopPropagation()} // Stops card toggle when clicking link
          >
            {project.action}
          </a>
        )}
      </div>
      <p
        className={`text-sm text-primary/80 font-bold absolute bottom-2 end-4 cursor-pointer ${isOpen ? "block" : "hidden group-hover:block"}`}
        onClick={(e) => {
          e.stopPropagation();
          handleClik();
        }}
      >
        more info
      </p>
      {showInfo && (
        <div className="w-full h-full absolute bg-zinc-800 text-yellow-50 flex justify-center items-center">
          <p className="p-4 text-center">
            {project?.info ? project.info : "No info available"}
          </p>
          <span
            className="cursor-pointer text-white absolute top-1 end-1"
            onClick={(e) => {
              e.stopPropagation();
              handleClik();
            }}
          >
            <AiOutlineCloseCircle size={22} />
          </span>
        </div>
      )}
    </div>
  );
};

export default ProjectItem;