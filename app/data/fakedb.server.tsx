import dasboargImg from "~/images/nextjs-dashboard.jpeg"
import beautyImg from "~/images/beauty.jpeg"
import weatherImg from "~/images/weatherApp.jpeg";
import florImg from "~/images/florBlanca.jpeg";
import gameImg from "~/images/game.jpeg";
import notesImg from "~/images/notesApp.jpeg";
import todoImg from "~/images/todoApp.jpeg";
import { TbBrandNextjs } from "react-icons/tb";
import { AiFillHtml5 } from "react-icons/ai";
import { RiJavascriptLine } from "react-icons/ri";
import { FaPython, FaCss3, FaBootstrap } from "react-icons/fa";
import { BiLogoTypescript, BiLogoReact } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";

export const fakeDb = {
  projectData: [
    {
      id: 1,
      img: dasboargImg,
      title: "NextJS Dashboard",
      link: "https://nextjs-dashboard-lilac-ten.vercel.app/dashboard",
      icons: [
        BiLogoReact,
        SiTailwindcss,
        TbBrandNextjs,
        BiLogoTypescript,
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
        AiFillHtml5,
        FaCss3,
        FaBootstrap,
        RiJavascriptLine,
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
        AiFillHtml5,
        FaCss3,
        FaBootstrap,
        RiJavascriptLine,
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
        AiFillHtml5,
        FaCss3,
        FaBootstrap,
        RiJavascriptLine,
        FaPython,
      ],
      action: "Visit Site",
      info: "Python (Flask) webb app. Postgresql Database and Stripe API.",
    },
    {
      id: 5,
      img: gameImg,
      title: "Flip Card Game",
      link: "https://moonflower-labs.github.io/Moonflowerlabs/flipcardGame/index.html",
      icons: [
        AiFillHtml5,
        FaCss3,
        FaBootstrap,
        RiJavascriptLine,
      ],
      action: "Play Game",
      info: "Fun project built with Vanilla Javascript.",
    },
    {
      id: 6,
      img: todoImg,
      title: "Todo App",
      link: "https://todo-app-a5f0c.web.app",
      icons: [
        AiFillHtml5,
        FaCss3,
        BiLogoTypescript,
      ],
      action: "Try Out",
      info: "Todo app built with Typescript.",
    },
    {
      id: 7,
      img: notesImg,
      title: "Notes App",
      link: "https://moonflower-labs.github.io/Moonflowerlabs/notesApp/index.html",
      icons: [
        AiFillHtml5,
        FaCss3,
        FaBootstrap,
        RiJavascriptLine,
      ],
      action: "Try Out",
      info: "Notess app using Local Storage, built in Vanilla JS and Bootstrap 5.",
    },
  ],
  workData: [
    {
      year: 2023,
      title: "Mooflower Labs.",
      duration: "Current",
      description:
        "Founded Moonflower Labs in 2023, a software company focused on web services. Leveraging a diverse background in the events industry and construction management, I transitioned into a new career in software development with a strong foundation in project management, attention to detail, and problem-solving abilities. Committed to adapting to new technologies and industry best practices, I continually strive to enhance my skills.",
    },
    {
      year: 2022,
      title: "Junior Software Developer",
      duration: "1 Year",
      description:
        "As a junior software developer, I bring a unique background in the events industry and construction management, transitioning into a new career in software development. With a strong foundation in project management, attention to detail, and problem-solving abilities.  Adapting to new technologies and industry best practices, I continually strive to enhance my skills and stay updated. With my strong organizational skills and ability to work effectively in team-oriented environments.",
    },

    {
      year: 2018,
      title: "Assistant Construction Manager",
      duration: "2 Years",
      description:
        "As an assistant construction manager, I supported senior managers in all aspects of construction projects. I coordinated activities, managed subcontractors, and ensured project timelines were met. With strong organizational skills, I communicated project updates and resolved issues.Through my role as an assistant construction manager, I gained valuable experience in project management, team collaboration, and construction operations.",
    },
    {
      year: 2013,
      title: "Joiner Foreman",
      duration: "5 Years",
      description:
        "As a carpenter foreman, I was responsible for supervising and coordinating carpentry activities on construction sites. I effectively managed a team of carpenters, ensuring work was completed according to project specifications and safety standards. With strong leadership skills, I scheduled and assigned tasks, monitored progress, and provided guidance and training when necessary. I also collaborated with other trades and project managers to ensure seamless workflow and smooth execution of carpentry projects. Through my role as a carpenter foreman, I gained valuable experience in overseeing carpentry operations and achieving project goals efficiently.",
    },
    {
      year: 2000,
      title: "Lighting Engineer",
      duration: "12 Years",
      description:
        "As a lighting engineer in the events industry, I was responsible for designing and executing lighting setups for various events. I worked closely with event planners and production teams to understand their lighting requirements and create visually compelling lighting designs. Using my technical expertise, I selected appropriate lighting fixtures, controlled lighting levels, and programmed lighting cues. I also oversaw the installation, operation, and maintenance of lighting equipment during events, ensuring smooth execution and troubleshooting any technical issues that arose. Through my role as a lighting engineer, I gained extensive knowledge of lighting technologies, design principles, and event production processes.",
    },
  ],
  services: [
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
  ]
} 
