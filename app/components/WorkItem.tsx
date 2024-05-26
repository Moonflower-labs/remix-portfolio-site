
const WorkItem = ({ year, title, duration, description }:WorkItemProps) => {
  return (
    <ol className=" text-orange-100  flex flex-col md:flex-row relative border-l border-pink-700">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-pink-700 rounded-full mt-1.5 -left-1.5 border border-orange-100" />
        <p className="flex flex-wrap gap-4 items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold bg-pink-700 rounded-md">
            {year}
          </span>
          <span className="text-lg font-semibold text-amber-400/80">
            {title}
          </span>
          <span className="my-1 text-sm font-normal leading-none text-stone-300">
            {duration}
          </span>
        </p>

        <p className="my-2 text-base font-normal text-justify px-3">
          {description}
        </p>
      </li>
    </ol>
  );
};
interface WorkItemProps  {
  year: number,
  title: string,
  duration: string,
  description: string,
}

export default WorkItem;
