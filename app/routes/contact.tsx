import React, { useState, useEffect } from "react";

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
    <div className="max-w-[1040px] mx-6 md:mx-auto">
      <h1 className="py-4 text-4xl text-center font-bold text-primary mb-6">
        Contact Us
      </h1>
      <p className="text-center pb-3 mb-6">
        Use the form below to contact us directly.
      </p>
      <form className="w-full max-w-xl mx-auto mb-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4 w-full ">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2" htmlFor="name">
              Name
            </label>
            <input
              className="input input-bordered w-full"
              name="name"
              type="text"
              id="name"
              autoComplete="false"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2" htmlFor="phone">
              Phone
            </label>
            <input
              className="input input-bordered w-full"
              name="phone"
              type="text"
              id="phone"
              autoComplete="false"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2" htmlFor="email">
            Email
          </label>
          <input
            className="input input-bordered w-full"
            name="email"
            type="email"
            id="email"
            autoComplete="false"
            required
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2" htmlFor="subject">
            Subject
          </label>
          <input
            className="input input-bordered w-full"
            type="text"
            name="subject"
            id="subject"
            required
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="textarea textarea-bordered"
            name="message"
            rows={10}
            id="message"
            required
          ></textarea>
        </div>
        <div className="flex flex-col">
          <input type="hidden" name="_gotcha" style={{ display: "none" }} />
          <button
            className="btn btn-primary"
            type="submit"
          >
            Send Message
          </button>
        </div>
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


