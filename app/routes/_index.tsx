import type { MetaFunction } from "@vercel/remix";
import { Link } from "@remix-run/react";
import bgImg from "~/images/bg.jpg"

export const meta: MetaFunction = () => {
  return [
    { title: "Moonflower Labs Site" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export function loader () {
  // throw new Error("something occurred")
  return null;
}

export default function Index() {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: `url(${bgImg})`}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl text-primary font-bold">Moonflower Labs</h1>
          <p className="py-6"> Web <span className="text-primary font-bold">Solutions </span>
              for small companies</p>
          <Link to={"projects"} className="btn btn-primary">Learn more</Link>
        </div>
      </div>
    </div>
  );
}
