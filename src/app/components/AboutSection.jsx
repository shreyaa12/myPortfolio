"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Frontend",
    id: "frontend",
    content: (
      <ul className="list-disc pl-3 pt-3 space-y-2">
        <li>React</li>
        <li>Angular</li>
        <li>HTML</li>
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>CSS</li>
        <li>AngularJS</li>
        <li>Tailwind UI/CSS</li>
        <li>Bootstrap</li>
      </ul>
    ),
  },
  {
    title: "Backend",
    id: "backend",
    content: (
      <ul className="list-disc pl-3 pt-3 space-y-2">
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>Express.js</li>
        <li>SQL</li>
        <li>C#</li>
      </ul>
    ),
  },
  {
      title: "Other",
      id: "other",
      content: (
        <ul className="list-disc pl-3 pt-3 space-y-2">
          <li>Restful API</li>
          <li>Redux</li>
          <li>NgRx</li>
          <li>Github</li>
          <li>VS Code</li>
          <li>Postman</li>
          <li>MongoDB Compass</li>
          <li>Heroku</li>
          <li>.NET</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-3 pt-3 space-y-2">
          <li>Bachelors in Tech for Information Technology | Dharmsinh Desai University, Nadiad, India</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-3 pt-3 space-y-2">
          <li>Emerging Leaders Program | Mount Royal University, Calgary, AB</li>
          <li>Microsoft Azure Fundamentals (Microsoft AZ-900 Certification Exam)</li>
          <li>C# for .NET Developers (Board Infinity)</li>
        </ul>
      ),
    },

];

const AboutSection = () => {
  const [tab, setTab] = useState("frontend");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      {/* <div className="md:grid md:grid-cols-1 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"> */}
        {/* <Image src="/images/about-image.png" width={500} height={500} alt="About" /> */}
        <div className="mt-4 md:mt-0 text-left flex flex-col flex-wrap h-full">
          <h2 className="text-4xl font-bold text-primary mt-4 mb-4 md:mb-6 pb-2 border-b-2 border-primary">About Me</h2>
          <div className="text-base lg:text-lg text-wrap space-y-3">
            <p className="text-primary"><span className="text-secondary-100 font-semibold">🌟Hello, I&apos;m Shreya Gokani,</span> a Code Sorcerer hailing from the enchanting landscapes of Calgary, Canada.</p>
            <p className="mt-3 text-primary"><span className="text-secondary-100 font-semibold">🏞️Nature Enthusiast</span> My heart finds solace in the midst of mountains and the beauty of the natural world. Beyond my coding spells, I&apos;m an avid mountain lover and passionate nature enthusiast.</p>

            <p className="mt-3 text-primary"><span className="text-secondary-100 font-semibold">🤝YMCA Volunteer </span> I proudly don the cape of a YMCA volunteer with a heart of gold, dedicating my time and skills to give back to the community and witness the positive impact we create together.</p>

            <p className="mt-3 text-primary"><span className="text-secondary-100 font-semibold">🎓Emerging Leaders Program Graduate </span> I am honored to be a graduate of the prestigious Emerging Leaders Program at Mount Royal University, Calgary, AB. This program has been a transformative journey, honing my leadership skills and instilling a deeper sense of purpose in me.</p>

            <p className="mt-3 text-primary"><span className="text-secondary-100 font-semibold">🚀Calgary Software Crafters Organizer </span>As an organizer at the Calgary Software Crafters Club, I&apos;m devoted to pushing tech boundaries and fostering a culture where creativity and innovation flourish. We&apos;re firm believers that sharing knowledge is the heart of our collective coding journey.</p>

            <p className="mt-3 text-primary">My journey is a harmonious blend of digital magic and the wonders of the great outdoors.</p>
          </div>

          <div className="flex flex-row flex-wrap justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("frontend")}
              active={tab === "frontend"}
            >
              {" "}
              Frontend{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("backend")}
              active={tab === "backend"}
            >
              {" "}
              Backend{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
            Certifications{" "}
            </TabButton>
          </div>
          
          <div className="mt-3">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
       
      {/* </div> */}
    </section>
  );
};

export default AboutSection;