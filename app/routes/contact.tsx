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
    <div className="max-w-[1040px] mx-6 md:mx-auto text-center">
      <h1 className="text-5xl bg-gradient-to-r py-3 from-primary to-secondary bg-clip-text text-transparent inline-block font-bold mb-4">
        Contact Us
      </h1>
      <p className="text-center pb-3 mb-6">
        Use the form below to contact us directly.
      </p>
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset max-w-md mx-auto bg-base-200 border border-base-300 p-4 rounded-box">
          <label className="fieldset-label" htmlFor="name">
            Name
          </label>
          <input
            className="input w-full"
            name="name"
            type="text"
            id="name"
            autoComplete="false"
            placeholder="Name"
            required
          />
          <label className="fieldset-label" htmlFor="phone">
            Phone
          </label>
          <input
            className="input w-full"
            name="phone"
            type="text"
            id="phone"
            placeholder="Phone Number"
            autoComplete="false"
          />
          <label className="fieldset-label" htmlFor="email">
            Email
          </label>
          <input
            className="input w-full"
            name="email"
            type="email"
            id="email"
            autoComplete="false"
            placeholder="Email"
            required
          />
          <label className="fieldset-label" htmlFor="subject">
            Subject
          </label>
          <input
            className="input w-full"
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            required
          />
          <label className="uppercase text-sm py-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="textarea w-full"
            name="message"
            rows={10}
            id="message"
            required
          ></textarea>
          <div className="flex flex-col">
            <input type="hidden" name="_gotcha" style={{ display: "none" }} />
            <button
              className="btn btn-primary mt-4"
              type="submit"
            >
              Send Message
            </button>
          </div>
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


