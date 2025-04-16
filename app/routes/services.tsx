import React from "react";
import { fakeDb } from "~/data/fakedb";
import type { Route } from "./+types/services";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"




export async function clientLoader() {
  return fakeDb.services
}


export default function Services({ loaderData }: Route.ComponentProps) {
  const services = loaderData;

  return (
    <div className="max-w-5xl mx-auto p-6 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent w-fit mx-auto mb-12">
        Our Services
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services && services.map((service) => (
          <Card key={service.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <p>{service.text.includes("Moonflower Labs") ? (
                service.text.split("Moonflower Labs").map((part, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && (
                      <span className="font-bold text-purple-600">Moonflower Labs</span>
                    )}
                    {part}
                  </React.Fragment>
                ))
              ) : (
                service.text
              )}</p>
            </CardContent>
            <CardFooter>
              <p></p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}