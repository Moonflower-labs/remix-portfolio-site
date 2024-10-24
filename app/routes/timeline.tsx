import { useLoaderData } from "@remix-run/react";
import WorkItem from "~/components/WorkItem";
import { fakeDb } from '~/data/fakedb.server';

export function loader() {
  return fakeDb.workData
}
export default function Timeline() {

  const data = useLoaderData<typeof loader>() || [];

  return (
    <div className="max-w-[1040px] m-auto p-4 py-16">
      <h2 className="text-4xl font-bold text-center  text-primary mb-4">
        Work History
      </h2>
      {data.map((item, index) => (
        <WorkItem key={index} job={item} />
      ))}
    </div>
  );
}



