import dasboargImg from "~/images/nextjs-dashboard.jpeg"
import beautyImg from "~/images/beauty.jpeg"
import weatherImg from "~/images/weatherApp.jpeg";
import florImg from "~/images/florBlanca.jpeg";
import gameImg from "~/images/game.jpeg";
import notesImg from "~/images/notesApp.jpeg";
import todoImg from "~/images/todoApp.jpeg";
import songImg from "~/images/song-studio.png";
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
        <BiLogoReact />,
        <SiTailwindcss />,
        <TbBrandNextjs />,
        <BiLogoTypescript />,
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
        <AiFillHtml5 />,
        <FaCss3 />,
        <FaBootstrap />,
        <RiJavascriptLine />,
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
        <AiFillHtml5 />,
        <FaCss3 />,
        <FaBootstrap />,
        <RiJavascriptLine />,
      ],
      action: "Check Weather",
      info: "Weather application using the Open Weather API.",
    },
    {
      id: 4,
      img: florImg,
      title: "E-commerce Webite",
      link: "https://laflorblanca.com",
      icons: [
        <AiFillHtml5 />,
        <FaCss3 />,
        <FaBootstrap />,
        <RiJavascriptLine />,
        <FaPython />,
      ],
      action: "Visit Site",
      info: "Python (Flask) webb app. Postgresql Database and Stripe API. Support subscriptions and one time payments.",
    },
    {
      id: 5,
      img: gameImg,
      title: "Flip Card Game",
      link: "https://moonflower-labs.github.io/Moonflowerlabs/flipcardGame/index.html",
      icons: [
        <AiFillHtml5 />,
        <FaCss3 />,
        <FaBootstrap />,
        <RiJavascriptLine />,
      ],
      action: "Play Game",
      info: "Card Match Game. Fun project built with Vanilla Javascript.",
    },
    {
      id: 6,
      img: songImg,
      title: "Song Studio App",
      icons: [
        <AiFillHtml5 />,
        <FaCss3 />,
        <BiLogoTypescript />,
      ],
      info: "Song Studio app.",
    },
    {
      id: 7,
      img: todoImg,
      title: "Todo App",
      link: "https://todo-app-a5f0c.web.app",
      icons: [
        <AiFillHtml5 />,
        <FaCss3 />,
        <BiLogoTypescript />,
      ],
      action: "Try Out",
      info: "Todo app written with plain Typescript.",
    },
    {
      id: 8,
      img: notesImg,
      title: "Notes App",
      link: "https://moonflower-labs.github.io/Moonflowerlabs/notesApp/index.html",
      icons: [
        <AiFillHtml5 />,
        <FaCss3 />,
        <FaBootstrap />,
        <RiJavascriptLine />,
      ],
      action: "Try Out",
      info: "Notess app using Local Storage, built with Vanilla JS and Bootstrap 5.",
    },
  ],
  workData: [
    {
      "year": 2023,
      "title": "Moonflower Labs",
      "duration": "Current",
      "description": "Kicked off Moonflower Labs in 2023—a little dev shop all about killer web services. Coming from gigs in events and construction, I jumped into software with a solid knack for managing projects, sweating the details, and solving problems. I’m all about keeping up with the latest tech and tricks, always leveling up my skills."
    },
    {
      "year": 2022,
      "title": "Junior Software Developer",
      "duration": "1 Year",
      "description": "Started out as a junior dev, bringing my events and construction vibes into the coding world. I’ve got a knack for organizing chaos, nailing the small stuff, and figuring things out. Loved digging into new tech, keeping my skills sharp, and teaming up to get stuff done."
    },
    {
      "year": 2018,
      "title": "Assistant Construction Manager",
      "duration": "2 Years",
      "description": "Helped run the show as an assistant construction manager, keeping projects on track and subcontractors in line. I was the go-to for updates, problem-solving, and making sure deadlines didn’t slip. Learned a ton about juggling tasks and working tight with a crew."
    },
    {
      "year": 2013,
      "title": "Joiner Foreman",
      "duration": "5 Years",
      "description": "Ran the carpentry crew like a boss, making sure everything on-site was spot-on and safe. I handed out tasks, kept things moving, and coached the team when they needed it. Worked hand-in-hand with other trades to keep projects humming along smoothly."
    },
    {
      "year": 2000,
      "title": "Lighting Engineer",
      "duration": "12 Years",
      "description": "Lit up the events scene as a lighting engineer, designing epic setups that wowed the crowd. Teamed up with planners to nail their vision, picked the right gear, and ran the show—programming lights, troubleshooting glitches, and keeping everything flawless from start to finish."
    }
  ],
  services: [
    {
      "id": 1,
      "title": "Web Design",
      "text": "We whip up awesome, easy-to-use websites that totally vibe with your brand. Think cool designs that work on any device and make your visitors go'swow'—we've got you covered to stand out from the crowd."
    },
    {
      "id": 2,
      "title": "Database Solutions",
      "text": "Got data? We'll sort it out with slick database setups that are safe, grow with you, and handle the heavy lifting. From planning to tweaking, we make your info work harder so you don't have to."
    },
    {
      "id": 3,
      "title": "UI (User Interface) Design",
      "text": "We're all about making your app or site look good and feel great to use. Our UI designs are pretty, simple, and get people clicking—because happy users mean more wins for you."
    },
    {
      "id": 4,
      "title": "Tech Consulting",
      "text": "Not sure what tech to pick? We've got your back. We chat with you, figure out what you need, and dish out no-nonsense advice on software, systems, and strategies that fit just right."
    },
    {
      "id": 5,
      "title": "Web Development",
      "text": "Got a big idea? We'll build it into a killer web app or site. At Moonflower Labs, we use the latest tools to make stuff that's fast, secure, and ready to roll—simple or fancy, we nail it."
    },
    {
      "id": 6,
      "title": "Website Maintenance",
      "text": "Keep your site running smooth without the hassle. We handle updates, fixes, and tune-ups so it stays fresh, safe, and ready for whatever—leaving you to focus on the fun stuff."
    },
    {
      "id": 7,
      "title": "API Integration",
      "text": "Want your systems to play nice together? We hook up APIs to level up your site or app, making everything flow better and work smarter—custom-fit for whatever you're dreaming up."
    }
  ]
} 
