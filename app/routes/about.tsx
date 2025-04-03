import { Link } from "react-router";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto p-6 py-12 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text inline-block text-transparent mb-10">
        About Us
      </h1>
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        <p className="text-lg md:text-xl leading-relaxed">
          Hey there! Welcome to <span className="font-bold text-indigo-600">Moonflower Labs</span>, a small-but-mighty software crew dedicated to building custom solutions for small businesses like yours. Founded by <span className="font-semibold text-purple-600">Alex Santiago</span>, a coder with a passion for turning ideas into slick, user-friendly apps. Alex is all about keeping things real—diving into the latest tech, collaborating like a pro, and making sure every project vibes with your goals. On time, on budget, and always with a smile—that’s the Moonflower way. Got a vision? Alex is your guy to make it happen.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          We’re pros at whipping up awesome <span className="italic">web designs</span>, taming wild <span className="italic">databases</span>, crafting smooth <span className="italic">UI</span>, dishing out smart <span className="italic">consulting</span>, and building rock-solid <span className="italic">web apps</span>. Basically, we’ve got the full toolkit to tailor solutions just for you. Want the quick scoop on what we do? Swing by our <Link to="/services" className="text-indigo-600 underline hover:text-purple-600 transition-colors">Services section</Link>!
        </p>
      </div>
    </div>
  )
}