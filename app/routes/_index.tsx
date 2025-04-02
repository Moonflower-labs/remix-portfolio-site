import { Link, isRouteErrorResponse, useRouteError } from "react-router";
import bgImg from "~/images/bg.jpg"
import type { Route } from "./+types/_index"
import { TypeAnimation } from "react-type-animation";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Moonflower Labs Site" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  // const users = await prisma.user.findMany()
  // throw new Error("something occurred")
  return null;
}

export default function Index() {

  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content text-center text-accent z-50 mx-6">
        <div className="max-w-md">
          <h1 className="text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold">Moonflower Labs</h1>
          <p className="py-6">Custom <span className="text-primary font-bold">Web Solutions </span>
            for growing businesses</p>
          <TypeAnimation
            sequence={[
              "Front End",
              1000,
              "Back End",
              1000,
              "Databases",
              1000,
              "Payment Gateways",
              1000,
              "API's",
              1000,
            ]}
            speed={50}
            className="mb-4 text-2xl text-primary font-semibold block"
            repeat={Infinity}
          />
          <Link to={"/about"} className="btn btn-primary">Learn more</Link>
        </div>
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError() as Error;
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
              ? error.statusText || error.message
              : error.message}
          </i>
        </p>
      </div>
    </div>
  );
}