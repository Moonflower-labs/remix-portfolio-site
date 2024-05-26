/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ReactNode, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ProjectItem = ({ img, title, link, icons, action, info }: ProjectItemProps) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleClik = () => {
    setShowInfo(!showInfo);
  };
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-500 rounded-xl group hover:bg-gradient-to-r from-primary/50 to-base-300 ease-linear duration-300 overflow-hidden">
      <img
        src={img}
        alt={title}
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="opacity-0 group-hover:opacity-100 ease-linear duration-200 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
        <h3 className="md:text-2xl text-xl font-bold text-yellow-100 tracking-wider text-center">
          {title}
        </h3>
        <div className="flex text-gray-300 w-full max-w-full justify-around pt-2 lg:mb-10">
          {icons}
        </div>
        <a href={link} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg">
            {action}
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
              {info ? info : "No info available"}
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
interface ProjectItemProps  {
  img: string,
  title: string,
  link: string,
  icons: ReactNode[],
  action: string,
  info: string,
}

export default ProjectItem;
