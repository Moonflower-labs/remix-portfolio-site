import { useLoaderData } from "react-router";
import WorkItem from "~/components/WorkItem";
import { fakeDb } from '~/data/fakedb';

export function loader() {
  return fakeDb.workData
}
export default function Timeline() {

  const data = useLoaderData<typeof loader>() || [];

  return (
    <div className="max-w-[1040px] m-auto p-4 py-16">
      <h1 className="text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block font-bold mb-4">
        Work History
      </h1>
      {data.map((item, index) => (
        <WorkItem key={index} job={item} />
      ))}
    </div>
  );
}



