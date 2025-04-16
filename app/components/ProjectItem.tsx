import { motion } from "motion/react";
import type { Project } from "~/utils/definitions";
import { Badge } from "@/components/ui/badge";


interface ProjectItemProps {
  project: Project;
  isFlipped: boolean;
  onFlip: (id: string | number) => void;
}

function ProjectItem({ project, isFlipped, onFlip }: ProjectItemProps) {

  const toggleFlip = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    e.stopPropagation();
    onFlip(project.id);
  };

  return (
    <motion.div
      className="w-full max-w-md mx-auto aspect-video perspective-1000"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformStyle: "preserve-3d" }}
        onClick={toggleFlip}
      >
        {/* Front Side */}
        <motion.div
          className="absolute w-full h-full rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-indigo-600/70 to-gray-800"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover opacity-80 hover:opacity-60 transition-opacity duration-300"
          />
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <h3 className="text-3xl md:text-3xl font-bold text- bg-secondary/70 py-2 px-4 rounded-md tracking-wide drop-shadow-md">
              {project.title}
            </h3>
          </div>
          <button
            className="absolute bottom-3 right-3 text-sm font-semibold"
            onClick={toggleFlip}
          >
            <Badge> Flip for Details</Badge>
          </button>
        </motion.div>

        {/* Back Side */}
        <motion.div
          className="absolute w-full h-full rounded-xl bg-primary text-secondary/80 flex flex-col items-center justify-center p-6 shadow-lg"
          style={{ backfaceVisibility: "hidden", rotateY: "180deg" }}
        >
          <motion.div
            className="flex gap-4 text-xl text-gray-200 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {project.icons.map((icon, index) => (
              <span key={index} className="hover:scale-125 transition-transform duration-300">{icon}</span>
            ))}
          </motion.div>
          <motion.p
            className="text-base md:text-lg text-center max-w-xs mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {project.info || "No info available yet—stay tuned!"}
          </motion.p>
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="btn px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              {project.action}
            </motion.a>
          )}
          <button
            className="absolute bottom-3 right-3 text-sm font-semibold text-indigo-300 hover:text-yellow-100 transition-colors duration-300"
            onClick={toggleFlip}
          >
            Back to Front
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
export default ProjectItem;


