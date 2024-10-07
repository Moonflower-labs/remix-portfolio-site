import React from "react";



const services = [
  {
    id: 1,
    title: "Web Design",
    text: "Stunning user-friendly websites that not only capture your brand's essence but also provide an excellent userexperience. We focus on creating intuitive interfaces and responsive designs to ensure that your website stands out from the competition.",
  },
  {
    id: 2,
    title: "Databases",
    text: "We have experience designing and implementing efficient database systems for businesses. Our database solutions are secure, scalable, and optimized to handle large volumes of data. We can assist with database architecture, data modeling, performance tuning, and data integration.",
  },
  {
    id: 3,
    title: "UI (User Interface) Design",
    text: "We understand the significance of a well-designed user interface in enhancing user engagement and satisfaction. We specialize in  creating aesthetically pleasing and intuitive interface designs that enhance usability and drive conversions.",
  },
  {
    id: 4,
    title: "Consulting",
    text: "Our consulting services empower businesses to make informed technology decisions. We provide expert guidance on software selection, system integration, and technology strategy. Our consultants work closely with clients to understand their unique requirements and provide practical solutions that align with their goals.",
  },
  {
    id: 5,
    title: "Web Development",
    text: "At Moonflower Labs, we can bring your ideas to life by creating robust and functional web applications. We use modern development frameworks and technologies to build scalable and secure solutions. Whether it's a simple website or a complex web application, we have the expertise to deliver high-quality results.",
  },
];

export default function Services() {
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
