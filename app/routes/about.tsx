import { Link } from "react-router";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto p-6 py-12 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-700 to-purple-600 bg-clip-text inline-block text-transparent mb-10">
        About Us
      </h1>
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        <p className="text-lg md:text-xl leading-relaxed">
          Moonflower Labs is a freelance web development studio dedicated to crafting modern, user-friendly web applications for small businesses. Specializing in JavaScript, Django, Python, and SQL, Moonflower Labs delivers clean, efficient, and responsive websites tailored to client needs. With a focus on responsive design and clean code, the studio is committed to turning ideas into functional, high-quality web solutions.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          Services include custom web development, user interface design, and database management, leveraging tools like HTML, CSS, Tailwind CSS, and Django. Explore the <Link to="/projects" className="text-indigo-600 underline hover:text-purple-600 transition-colors">Projects section</Link> to see examples of work or visit <Link to="/contact" className="text-indigo-600 underline hover:text-purple-600 transition-colors">Get in Touch</Link> to discuss your next project.
        </p>
      </div>
    </div>
  )
}