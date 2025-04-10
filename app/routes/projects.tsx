import { useState } from "react";
import ProjectItem from "~/components/ProjectItem";
import Pagination from "~/components/Pagination"
import { fakeDb } from "~/data/fakedb";
import { Project } from "~/utils/definitions";
import type { Route } from "./+types/projects"
import { useSearchParams } from "react-router";



export async function clientLoader() {
  return fakeDb.projectData
}

export function HydrateFallback() {
  return <p className="text-4xl font-bold text-center py-14 text-primary">Loading Projects...</p>;
}

export default function Projects({ loaderData }: Route.ComponentProps) {
  const projectData = loaderData as Project[] || [];
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentPage, setCurrentPage] = useState(searchParams.get("page") ? Number(searchParams.get("page")) : 1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(projectData.length / itemsPerPage);


  return (

    <>
      <div className="max-w-[1024px] m-auto p-4 py-16">
        <h1 className="text-5xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent w-fit mx-auto p-1 font-bold mb-4">
          Projects
        </h1>
        <p className="text-center py-8">
          These are just a few examples of the diverse projects we have
          built.
        </p>
        {projectData ? (
          <div className="grid sm:grid-cols-2 gap-12">
            {projectData
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )
              .map((project) => (
                <ProjectItem
                  key={project.id}
                  project={project}
                />
              ))}
          </div>
        ) : (
          <p className="text-center mx-auto">
            No projects avaliable to display
          </p>
        )}
      </div>
      {projectData && projectData.length > itemsPerPage && (
        <Pagination
          currentPage={currentPage as number}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      )}
    </>
  );
}
