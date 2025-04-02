import WorkItem from "~/components/WorkItem";
import { fakeDb } from '~/data/fakedb';
import { Route } from "./+types/timeline";

export async function clientLoader() {
  return fakeDb.workData
}
export default function Timeline({ loaderData }: Route.ComponentProps) {
  const data = loaderData || [];

  return (
    <div className="max-w-[1040px] m-auto p-4 py-16">
      <h1 className="text-5xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block font-bold mb-4">
        Work History
      </h1>
      {data.map((item, index) => (
        <WorkItem key={index} job={item} />
      ))}
    </div>
  );
}



