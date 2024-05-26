import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";

import type { LinksFunction } from "@vercel/remix";
import stylesheet from "~/tailwind.css?url";
import Navbar from "./components/Navbar";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dim">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        {children}
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
