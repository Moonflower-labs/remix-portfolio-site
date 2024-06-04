import { useState } from "react";
import ProjectItem from "~/components/ProjectItem";
import Pagination from "~/components/Pagination"
import { fakeDb } from "~/data/fakedb.server";
import { useLoaderData } from "@remix-run/react";
import { Project } from "~/utils/definitions";

export function loader(){
  
  return fakeDb.projectData
}


export default function Projects () {
  const  projectData = useLoaderData() as Project[] || []
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(projectData.length / itemsPerPage);


  return (
    
    <section 
      className="">
      <div className="max-w-[1024px] m-auto p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-primary">
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
    </section>
  );
}
