import { useLoaderData } from "react-router";
import React from "react";
import { fakeDb } from "~/data/fakedb";
import type { Route } from "./+types/services";



export async function clientLoader() {
  return fakeDb.services
}

export default function Services({ loaderData }: Route.ComponentProps) {
  const services = loaderData;

  return (
    <div className="max-w-[1024px] m-auto p-4">
      <h1 className="text-5xl text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent w-fit mx-auto font-bold mb-4">Services</h1>
      <ul className="text-xl  px-6 md:px-4 ">
        {services &&
          services.map((service) => {
            return (
              <li className="mb-10 ml-4" key={service.id}>
                <span className="inline-block font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent rounded-md mb-4 px-2">
                  {`${service.id}. ${service.title}`}
                </span>

                {service.text.includes("Moonflower Labs") ? (
                  <p>
                    {service.text
                      .split("Moonflower Labs")
                      .map((textPart, index) => (
                        <React.Fragment key={index}>
                          {index > 0 && (
                            <span className="text-primary font-bold">
                              Moonflower Labs
                            </span>
                          )}
                          {textPart}
                        </React.Fragment>
                      ))}
                  </p>
                ) : (
                  <p>{service.text}</p>
                )}
              </li>
            );
          })}
      </ul>
    </div>
  )
}
