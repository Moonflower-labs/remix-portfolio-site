import { useState } from "react";
import { href, useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

export default function Contact() {
  const navigate = useNavigate()

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        navigate(href("/thanks")); // Redirect to thank you page
      } else {
        console.error("Form submission error", response);
      }
    } catch (error) {
      console.error("Error submitting the form", error);
    } finally {
      setIsSubmitting(false); // Reset submitting state after the API call
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
          <input type="hidden" name="access_key" value={"3ae5d6c2-8fe6-4eb6-896a-c5c7764d7a18"} />
          {/* Honeypot Spam Protection  */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
          <Input type="text" placeholder="Name" name="name" required />
          <Input type="text" placeholder="Phone" name="phone" />
          <Input type="email" placeholder="Email" name="email" required />
          <Input type="text" placeholder="Subject" name="subject" required />
          <Textarea name="message" required placeholder="Type your message here." />
          <Button
            className="mt-4"
            type="submit"
            disabled={isSubmitting}
          >
            Send Message
            {isSubmitting &&
              <div className="inline-block ml-2 animate-spin rounded-full border-t-4 border-primary-foreground h-6 w-6"></div>
            }
          </Button>
        </fieldset>
      </form>
    </div>
  )
}


