import { Link } from "@remix-run/react";

export default function About() {
  return (
    <div className="max-w-[1024px] m-auto p-4 py-8 text-center">
      <h2 className="text-4xl xl:text-6xl font-bold text-center text-primary mb-4 py-8">
        About
      </h2>
      <div className="flex flex-col gap-4">
        <p className="px-8 text-xl">
          Moonflower Labs is a software development company focused on
          crafting customized solutions for small businesses. Founded by
          <span className="text-primary text-lg"> Alex Santiago</span>. As a
          developer, his goal is to create efficient and user-friendly
          applications. He is passionate about coding and constantly learning
          to stay up-to-date with the latest technologies. Collaboration and
          communication are main the priorities, ensuring the understanding
          and alignment with the vision and goals of our clients. Always
          committed to delivering projects on time and within budget to
          achieve client satisfaction. If you are looking for a skilled and
          dedicated developer to bring your ideas to life,
          <span className="text-primary text-lg"> Alex</span> is here to
          help.
        </p>
        <p className="px-8 text-xl">
          Moonflower Labs specializes in providing comprehensive services in
          web design, databases, UI, consulting, and web development. Our
          expertise in these areas allows us to deliver tailored solutions
          that meet the specific needs of our clients. For a brief
          overview of each of these services, visit the <Link to={"/services"} className="link-primary underline">Services section</Link>.
        </p>
      </div>
    </div>
  )
}