import ProjectItem from "~/components/ProjectItem";
import Paginator from "~/components/Pagination"
import { fakeDb } from "~/data/fakedb";
import { Project } from "~/utils/definitions";
import type { Route } from "./+types/projects"
import { useSearchParams } from "react-router";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";


export async function clientLoader() {
  return fakeDb.projectData
}

export function HydrateFallback() {

  return (
    <div className="p-50 grid sm:grid-cols-2 gap-12">
      <Skeleton className="w-[85%] bg-primary h-full rounded-lg mx-auto aspect-video" />
      <Skeleton className="w-[85%] bg-primary h-full rounded-lg mx-auto aspect-video" />
      <Skeleton className="w-[85%] bg-primary h-full rounded-lg mx-auto aspect-video" />
      <Skeleton className="w-[85%] bg-primary h-full rounded-lg mx-auto aspect-video" />
    </div>
  );
}

export default function Projects({ loaderData }: Route.ComponentProps) {
  const projectData = loaderData as Project[] || [];
  const [searchParams,] = useSearchParams()
  const currentPage = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
  const itemsPerPage = 4;
  const totalPages = Math.ceil(projectData.length / itemsPerPage);
  const [flippedId, setFlippedId] = useState<string | number | null>(null);

  const handleFlip = (id: string | number) => {
    if (flippedId === id) {
      setFlippedId(null); // Unflip if same card
    } else if (flippedId) {
      // If another card is flipped, unflip it first, then flip new card
      setFlippedId(null);
      setTimeout(() => setFlippedId(id), 300); // Delay new flip
    } else {
      setFlippedId(id); // Flip new card
    }
  };


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
                  isFlipped={flippedId === project.id}
                  onFlip={handleFlip}
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
        <Paginator
          currentPage={currentPage as number}
          totalPages={totalPages}
        />
      )}
    </>
  );
}
