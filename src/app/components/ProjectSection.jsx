"use client"
import React,{useRef } from 'react'
import ProjectCard from './ProjectCard'
import { motion, useInView } from "framer-motion";

const projectData = [
    {
        id: 1,
        title: "NHYYC-Homes",
        description: "Real Estate Application",
        image: "/images/projects/NHYYCHomes.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "https://www.newhomeincalgary.ca/",
        technology:['Next.js','React.js', 'MongoDB', 'Node.js']
      },
      {
        id: 2,
        title: "SurveySphere",
        description: "Feedback Portal",
        image: "/images/projects/feedback.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/shreyaa12/feedback-app/tree/master/feedback-app",
        previewUrl: "https://feedback-app-olive-seven.vercel.app/",
        technology:['React.js', 'Restful API','CSS','JSON']
      },
      {
        id: 3,
        title: "RentWheels",
        description: "Car Rental Application",
        image: "/images/projects/carRental.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/shreyaa12/CarRental/tree/master/car_showcase",
        previewUrl: "https://car-rental-plum.vercel.app/",
        technology:['Next.js','React.js', 'MongoDB', 'Node.js']

      },
      {
        id: 4,
        title: "BrewBean",
        description: "Coffee Shop Menu",
        image: "/images/projects/coffeeShop.png",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/shreyaa12/CoffeeShopSystem/tree/features/CoffeeProduct",
        previewUrl: "https://coffee-shop-system.vercel.app/coffees",
        technology:['Angular14','NgRx', 'MongoDB', 'Node.js']
      },
      {
        id: 5,
        title: "SpaceX",
        description: "SpaceX Launch Products",
        image: "/images/projects/SpaceXlaunch.jpg",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/shreyaa12/SpaceXLaunch",
        previewUrl: "/",
        technology:['HTML','CSS', 'Responsive UI']
      },
      
]

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className='py-8 xl:gap-16 sm:py-16'>
        <h2 className='text-left text-4xl font-bold text-primary mt-4 mb-4 md:mb-6 pb-2 border-b-2 border-primary'>My Projects</h2>
        
        <ul ref={ref} className='grid md:grid-cols-2 gap-8 md:gap-12'>
          {projectData.map((project,index) => 
    
          <motion.li
          key={index}
          variants={cardVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.3, delay: index * 0.4 }}
          >
          <ProjectCard key={project.id} title={project.title} 
          description={project.description} imgUrl={project.image} 
          gitUrl={project.gitUrl}  previewUrl={project.previewUrl} technology={project.technology}
          />
          </motion.li>
        )}
        </ul>
    </section>
  )
}

export default ProjectSection