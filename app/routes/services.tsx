import React from "react";
import { fakeDb } from "~/data/fakedb";
import type { Route } from "./+types/services";



export async function clientLoader() {
  return fakeDb.services
}

// export default function Services({ loaderData }: Route.ComponentProps) {
//   const services = loaderData;

//   return (
//     <div className="max-w-[1024px] m-auto p-4">
//       <h1 className="text-5xl text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent w-fit mx-auto font-bold mb-4">Services</h1>
//       <ul className="text-xl  px-6 md:px-4 ">
//         {services &&
//           services.map((service) => {
//             return (
//               <li className="mb-10 ml-4" key={service.id}>
//                 <span className="inline-block font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent rounded-md mb-4 px-2">
//                   {`${service.id}. ${service.title}`}
//                 </span>

//                 {service.text.includes("Moonflower Labs") ? (
//                   <p>
//                     {service.text
//                       .split("Moonflower Labs")
//                       .map((textPart, index) => (
//                         <React.Fragment key={index}>
//                           {index > 0 && (
//                             <span className="text-primary font-bold">
//                               Moonflower Labs
//                             </span>
//                           )}
//                           {textPart}
//                         </React.Fragment>
//                       ))}
//                   </p>
//                 ) : (
//                   <p>{service.text}</p>
//                 )}
//               </li>
//             );
//           })}
//       </ul>
//     </div>
//   )
// }




export default function Services({ loaderData }: Route.ComponentProps) {
  const services = loaderData;

  return (
    <div className="max-w-5xl mx-auto p-6 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent w-fit mx-auto mb-12">
        Our Services
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services && services.map((service) => (
          <div
            key={service.id}
            className="bg-base-300 rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <h2 className="text-2xl font-bold text-primary mb-3">
              {service.title}
            </h2>
            <p className="text-base-content leading-relaxed">
              {service.text.includes("Moonflower Labs") ? (
                service.text.split("Moonflower Labs").map((part, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && (
                      <span className="font-bold text-purple-600">Moonflower Labs</span>
                    )}
                    {part}
                  </React.Fragment>
                ))
              ) : (
                service.text
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}