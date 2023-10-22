"use client"
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import Image from "next/image";

const TAB_DATA = [
    {
      title: "Frontend",
      id: "frontend",
      content: (
        <ul className="list-disc pl-2">
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
        <ul className="list-disc pl-2">
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
        <ul className="list-disc pl-2">
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
        <ul className="list-disc pl-2">
          <li>Fullstack Academy of Code</li>
          <li>University of California, Santa Cruz</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
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
    <section className="text-primary" id="about">
        <h2 className="text-4xl font-bold text-primary mt-4 md:mb-6 pb-2 border-b-2 border-primary">Skills</h2>
      {/* <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"> */}
        <div className="text-left flex flex-col h-full">
          <div className="flex flex-row justify-start ">
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
              selectTab={() => handleTabChange("other")}
              active={tab === "other"}
            >
              {" "}
              Other{" "}
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
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
