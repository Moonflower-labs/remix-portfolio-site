import { Link, href, isRouteErrorResponse } from "react-router";
import bgImg from "~/images/bg.jpg"
import type { Route } from "./+types/home"
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Moonflower Labs Site" },
    { name: "description", content: "Welcome to Moonflower Labs!" },
  ];
};


export default function Index() {

  return (
    <div className="min-h-screen flex justify-between items-center gap-2">
      {/* style={{ backgroundImage: `url(${bgImg})` }}s */}
      <div className="max-w-md text-center mx-auto">
        <h1 className="text-5xl bg-gradient-to-r from-violet-700 via-indigo-600 to-purple-700 bg-clip-text text-transparent font-bold">Moonflower Labs</h1>
        <p className="py-6">Custom <span className="font-bold">Web Solutions </span>
          for growing businesses</p>
        <TypeAnimation
          sequence={[
            "Frontend",
            1000,
            "Backend",
            1000,
            "Databases",
            1000,
            "Payment Gateways",
            1000,
            "API's",
            1000,
          ]}
          speed={50}
          className="mb-4 text-2xl font-semibold block"
          repeat={Infinity}
        />
        <Link to={href("/about")} >
          <Button className="cursor-pointer">Learn more</Button>
        </Link>
      </div>
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  console.error(error);

  return (

    <div
      data-testid="error-page"
      className="h-screen w-full flex justify-center items-center"
    >
      <div className="text-center p-4 my-auto">
        <h1 className="text-5xl mb-3">Oops!</h1>
        <h5 className="text-3xl mb-3">Sorry, an error has ocurred.</h5>
        <p className="text-2xl text-error">
          <i>
            {isRouteErrorResponse(error)
              ? error.statusText
              : error instanceof Error ? error.message : "Unknown"}
          </i>
        </p>
      </div>
    </div>
  );
}