import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

export default function Contact() {

  return (
    <div className="max-w-[1040px] mx-6 md:mx-auto text-center">
      <h1 className="text-5xl bg-gradient-to-r py-3 from-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block font-bold mb-4">
        Contact Us
      </h1>
      <p className="text-center pb-3 mb-6">
        Use the form below to contact us directly.
      </p>
      <form action={"https://api.web3forms.com/submit"} method="POST">
        <fieldset className="max-w-md mx-auto flex flex-col gap-2 border p-4 rounded-lg">
          <input type="hidden" name="access_key" value={"3ae5d6c2-8fe6-4eb6-896a-c5c7764d7a18"} />
          {/* Honeypot Spam Protection  */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
          {/* Custom Confirmation / Success Page  */}
          <input type="hidden" name="redirect" value="https://moonflowerlabs.vercel.app/thanks" />
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
    </div>
  )
}


