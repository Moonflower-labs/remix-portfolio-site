/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import ProjectItem from "~/components/ProjectItem";
import dasboargImg from "~/images/nextjs-dashboard.jpeg"
import beautyImg from "~/images/beauty.jpeg"
import weatherImg from "~/images/weatherApp.jpeg";
import florImg from "~/images/florBlanca.jpeg";
// import gameImg from "../assets/game.jpeg";
// import notesImg from "../assets/notesApp.jpeg";
// import todoImg from "../assets/todoApp.jpeg";
// import nextDashboard from "../assets/nextjs-dashboard.jpeg";
// import Pagination from "../components/Pagination";
import { TbBrandNextjs } from "react-icons/tb";
import { AiFillHtml5 } from "react-icons/ai";
import { RiJavascriptLine } from "react-icons/ri";
import { FaPython, FaCss3, FaBootstrap } from "react-icons/fa";
import { BiLogoTypescript, BiLogoReact } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";

const projectData = [
  {
    id: 1,
     img: dasboargImg,
    title: "NextJS Dashboard",
    link: "https://nextjs-dashboard-lilac-ten.vercel.app/dashboard",
    icons: [
      <BiLogoReact key={1} />,
      <SiTailwindcss key={2} />,
      <TbBrandNextjs key={3} />,
      <BiLogoTypescript key={4} />,
    ],
    action: "Visit Site",
    info: "Dasboard website deployed in Vercel with Postgres database",
  },
  {
    id: 2,
    img: beautyImg,
    title: "Natural Theraphy",
    link: "https://moonflower-labs.github.io/Moonflowerlabs/Paula/index.html",
    icons: [
      <AiFillHtml5 key={1} />,
      <FaCss3 key={2} />,
      <FaBootstrap key={3} />,
      <RiJavascriptLine key={4} />,
    ],
    action: "Visit Site",
    info: "Front end business site, HTML, CSS, Javascript and Bootstrap 5.",
  },
  {
    id: 3,
    img: weatherImg,
    title: "Weather App",
    link: "https://moonflower-labs.github.io/Moonflowerlabs/weatherApp/index.html",
    icons: [
      <AiFillHtml5 key={1} />,
      <FaCss3 key={2} />,
      <FaBootstrap key={3} />,
      <RiJavascriptLine key={4} />,
    ],
    action: "Check Weather",
    info: "Weather application using the Open Weather API.",
  },
  {
    id: 4,
    img: florImg,
    title: "Subscriptions/E-commerce Site",
    link: "https://laflorblanca.com",
    icons: [
      <AiFillHtml5 key={1} />,
      <FaCss3 key={2} />,
      <FaBootstrap key={3} />,
      <RiJavascriptLine key={4} />,
      <FaPython key={5} />,
    ],
    action: "Visit Site",
    info: "Python (Flask) webb app. Postgresql Database and Stripe API.",
  },
  {
    id: 5,
    // img: gameImg,
    title: "Flip Card Game",
    link: "https://moonflower-labs.github.io/Moonflowerlabs/flipcardGame/index.html",
    icons: [
      <AiFillHtml5 key={1} />,
      <FaCss3 key={2} />,
      <FaBootstrap key={3} />,
      <RiJavascriptLine key={4} />,
    ],
    action: "Play Game",
    info: "Fun project built with Vanilla Javascript.",
  },
  {
    id: 6,
    // img: todoImg,
    title: "Todo App",
    link: "https://todo-app-a5f0c.web.app",
    icons: [
      <AiFillHtml5 key={1} />,
      <FaCss3 key={2} />,
      <BiLogoTypescript key={3} />,
    ],
    action: "Try Out",
    info: "Todo app built with Typescript.",
  },
  {
    id: 7,
    // img: notesImg,
    title: "Notes App",
    link: "https://moonflower-labs.github.io/Moonflowerlabs/notesApp/index.html",
    icons: [
      <AiFillHtml5 key={1} />,
      <FaCss3 key={2} />,
      <FaBootstrap key={3} />,
      <RiJavascriptLine key={4} />,
    ],
    action: "Try Out",
    info: "Notess app using Local Storage, built in Vanilla JS and Bootstrap 5.",
  },
];

export default function Projects () {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
//   const totalPages = Math.ceil(projectData.length / itemsPerPage);
//   const location = useLocation();
//   const navigate = useNavigate();

  

  return (
    
    <section 
      className="">
      <div className="max-w-[1024px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center  text-primary">
          Projects
        </h1>
        <p className="text-center py-8">
          These are just a few examples of the diverse projects we have
          built. 
        </p>
        {projectData ? (
          <div className="grid sm:grid-cols-2 gap-12 ">
            {projectData
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )
              .map((project) => (
                <ProjectItem
                  key={project.id}
                  img={project.img as string}
                  title={project.title}
                  link={project.link}
                  icons={project.icons}
                  info={project.info}
                  action={project.action}
                />
              ))}
          </div>
        ) : (
          <p className="text-center mx-auto">
            No projects avaliable to display
          </p>
        )}
      </div>
      {/* {projectData && projectData.length > itemsPerPage && (
        <Pagination
          currentPage={parseInt(currentPage)}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
          handleClickPage={handleClickPage}
        />
      )} */}
    </section>
  );
}
