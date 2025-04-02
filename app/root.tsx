import {
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLocation,
  useOutlet,
  useRouteError,
} from "react-router";

import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import "./app.css";

const routeVariants = {
  initial: {
    opacity: 0,
    filter: "blur(5px)",
  },
  final: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
  },
  exit: {
    x: -600,
    opacity: 0,
    filter: "blur(5px)",
    transition: { ease: "easeOut" },
  },
};

export function headers() {
  return {
    "Cache-Control": "s-max-age=259200, stale-while-revalidate=86400, stale-if-error=604800"
  }
}

export function Layout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" data-theme="night">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <link rel="icon" href="/flowerLogo.jpeg" type="image/jpeg" />
        <Links />
      </head>
      <body>
        <Navbar />
        <div className="min-h-screen bg-base-200">
          {children}
        </div>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const outlet = useOutlet()
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={routeVariants}
        initial="initial"
        animate="final"
        transition={{ duration: 0.4 }}
        exit={"exit"}
      >
        {outlet}
      </motion.div>
    </AnimatePresence>);
}

export function ErrorBoundary() {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <html lang="en">
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        {/* add the UI you want your users to see */}
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
        <Scripts />
      </body>
    </html>
  );
}
