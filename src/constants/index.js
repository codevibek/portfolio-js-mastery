import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Web 3 Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },{
      title: "Mobile Developer",
      icon: backend,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: reactjs,
    },
    {
      name: "Redux",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Bootstrap",
      icon: tailwind,
    },
    {
      name: "Material UI",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Nest JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "hardhat",
      icon: docker,
    },
    {
      name: "jest",
      icon: docker,
    },
    {
      name: "chai",
      icon: docker,
    },
    {
      name: "strapi",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Intern",
      company_name: "DB Workshop",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Feb 2021 - Jul 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with senior developer on a dvelopment of ecommerce platform.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Junior Software Developer",
      company_name: "Nepal Can Move",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jul 2021 - Mar 2022",
      points: [
        "Developing and maintaining web applications using React js, Redux, Mongodb, Express js and Node js",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Copenned",
      icon: shopify,
      iconBg: "#383E56",
      date: "Mar 2022 - Nov 2022",
      points: [
        "Developing and maintaining web applications using React js, Strapi, NoSQL, AWS, Springboot, Noded js, Next js and so on.",
        "Mentoring junior developers and interns.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Leading several projects with small teams.",
      ],
    },
    {
      title: "Backend Developer",
      company_name: "Neptiann Enterprises",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "May 2022 - Apr 2023",
      points: [
        "Developing and maintaining web applications using Node js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Implemented functionalities related to blockchain",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Sumulya",
      description:
        "E-commerce platform that emphasized on local products",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };