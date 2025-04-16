import React, { useState, useEffect } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (submitted) {
      timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [submitted]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch(
        "https://getform.io/f/f5fc6514-76cf-48de-b6dc-fcf613335978",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log(response);
      event.currentTarget.reset();
      setSubmitted(true);
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="max-w-[1040px] mx-6 md:mx-auto text-center">
      <h1 className="text-5xl bg-gradient-to-r py-3 from-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block font-bold mb-4">
        Contact Us
      </h1>
      <p className="text-center pb-3 mb-6">
        Use the form below to contact us directly.
      </p>
      <form onSubmit={handleSubmit}>
        <fieldset className="max-w-md mx-auto flex flex-col gap-2 border p-4 rounded-lg">
          <input type="hidden" name="_gotcha" style={{ display: "none" }} />
          <Input type="text" placeholder="Name" name="name" required />
          <Input type="text" placeholder="Phone" name="phone" />
          <Input type="email" placeholder="Email" name="email" required />
          <Input type="text" placeholder="Subject" name="subject" required />
          <Textarea name="message" required placeholder="Type your message here." />
          <Button
            className="mt-4"
            type="submit"
          >
            Send Message
          </Button>
        </fieldset>
      </form>
      {submitted && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-zinc-800 text-orange-200 rounded-lg p-6 shadow-lg">
            <p className="text-xl">Form submitted successfully!</p>
          </div>
        </div>
      )}
    </div>
  )
}


