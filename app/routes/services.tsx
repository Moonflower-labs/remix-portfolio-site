import { useLoaderData } from "@remix-run/react";
import React from "react";
import { fakeDb } from "~/data/fakedb.server";



export function loader() {
  return fakeDb.services
}

export default function Services() {
  const services = useLoaderData<typeof loader>()

  return (
    <div className="max-w-[1024px] m-auto p-4">
      <h2 className="text-4xl xl:text-6xl font-bold text-center text-primary mb-4">
        Services
      </h2>
      <ul className="text-xl text-justify px-6 md:px-4 ">
        {services &&
          services.map((service) => {
            return (
              <li className="mb-10 ml-4" key={service.id}>
                <span className="inline-block font-semibold bg-gradient-to-r from-primary/40 to-accent/25 rounded-md mb-4 px-2">
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
