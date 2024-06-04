import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLocation,
  useOutlet,
  useRouteError,
} from "@remix-run/react";

import Navbar from "./components/Navbar";
import  "./tailwind.css";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
import { cloneElement } from "react";




export function Layout() {
  const location = useLocation()
  const children = useOutlet()
  return (
    <html lang="en" data-theme="cupcake">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <link rel="icon" href="/flowerLogo.jpeg" type="image/jpeg" />
        <Links />
      </head>
      <body>
        <Navbar />
        <div className="min-h-[80vh]">
          <AnimatePresence mode="wait">
            {children && cloneElement(children, { key: location.pathname + location.hash })}
          </AnimatePresence>
        </div>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
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
