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
          <p className="text-base lg:text-lg text-wrap">
          I enjoy being in nature, and Calgary is an ideal destination for nature enthusiasts and mountain lovers. I find immense joy in activities such as hiking, camping, observing nature, and witnessing the beauty of a sunrise. There&apos;s a sense of fulfillment that comes from contributing to the community, which is why I volunteer as part of the Front Desk Membership Services team at the YMCA. Additionally, I&apos;m a member of the Calgary Software Crafters Club, which believes in Test Driven Development and promotes it by organizing free events and Coderetreats.
          </p>
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