/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import type { Project } from "~/utils/definitions";

const ProjectItem = ({project}: {project: Project}) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleClik = () => {
    setShowInfo(!showInfo);
  };
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-lg shadow-primary/40 rounded-xl group hover:bg-gradient-to-r from-primary/50 to-base-300 ease-linear duration-300 overflow-hidden">
      <img
        src={project.img}
        alt={project.title}
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="opacity-0 group-hover:opacity-100 ease-linear duration-1000 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
        <h3 className="md:text-2xl text-xl font-bold text-yellow-100 tracking-wider text-center mb-4">
          {project.title}
        </h3>
        <div className="flex text-gray-300 w-full max-w-full justify-around pt-2 mb-6 lg:mb-10">
          {project.icons}
        </div>
        <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-primary">
            {project.action}
        </a>
      </div>
      <p
        className="text-sm text-primary/80 hidden group-hover:block  font-bol absolute bottom-2 end-4 cursor-pointer"
        onClick={handleClik}
      >
        more info
      </p>
      {showInfo && (
        <>
          <div className="w-full h-full absolute bg-zinc-800  text-yellow-50 flex justify-center items-center ">
            <p className="p-4 text-center">
              {project?.info ? project.info : "No info available"}
            </p>
            <span
              className="cursor-pointer  text-white absolute top-1 end-1"
              onClick={handleClik}
            >
              <AiOutlineCloseCircle size={22} />
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectItem;
