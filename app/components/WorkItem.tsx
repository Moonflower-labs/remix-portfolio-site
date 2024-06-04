import { Work } from "~/utils/definitions";

const WorkItem = ({ job }: { job: Work }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-secondary">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-secondary rounded-full mt-1.5 -left-1.5" />
        <p className="flex flex-wrap gap-4 items-center justify-start text-xs md:text-sm">
          <span className=" badge badge-secondary badge-outline">
            {job.year}
          </span>
          <span className="text-lg font-semibold text-primary/80">
            {job.title}
          </span>
          <span className="my-1 text-sm font-normal leading-none">
            {job.duration}
          </span>
        </p>

        <p className="my-2 font-normal px-3">
          {job.description}
        </p>
      </li>
    </ol>
  );
};

export default WorkItem;
