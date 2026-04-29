export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "DeFi-Stablecoin",
    description:
      "A full-stack Decentralized Stablecoin (CDP) engine built with Foundry and Next.js. This DeFi protocol allows users to deposit collateral and mint a stablecoin, featuring complex smart contract logic for liquidations and oracle price feeds.",
    technologies: ["Solidity", "Foundry", "Next.js", "Ethereum"],
    github: "https://github.com/BhupinderrSingh/DeFi-Stablecoin",
    demo: "",
    image: require(".//../../public/projects/odunsi.png"),
    available: true,
  },
  {
    id: 1,
    name: "CitriScan",
    description:
      "An AI-powered citrus disease detection system featuring a real-time Gradio web interface. Built with deep learning and optimized image preprocessing using TensorFlow for accurate multi-class disease classification.",
    technologies: ["TensorFlow", "Python", "Deep Learning", "Gradio"],
    github: "https://github.com/BhupinderrSingh/CitriScan",
    demo: "",
    image: require(".//../../public/projects/interlock.png"),
    available: true,
  },
  {
    id: 2,
    name: "Citrus-Diagnosis",
    description:
      "An AI-powered agritech web app featuring a custom MobileNetV2 CNN for real-time citrus disease detection and a Gemini-powered diagnostic chatbot. Built with Flask, responsive CSS/JS, and real-world agricultural data.",
    technologies: ["Flask", "MobileNetV2", "Gemini API", "Python"],
    github: "https://github.com/BhupinderrSingh/Citrus-Diagnosis-",
    demo: "",
    image: require(".//../../public/projects/synthetix-flip.png"),
    available: true,
  },
  {
    id: 3,
    name: "Number-Guess-Game",
    description:
      "A sleek, interactive desktop application built with Java that challenges players to guess a randomly generated number. Demonstrates event-driven programming and graphical user interface (GUI) design patterns.",
    technologies: ["Java", "Swing", "Event-Driven Programming"],
    github: "https://github.com/BhupinderrSingh/Number-Guess-Game",
    demo: "",
    image: require(".//../../public/projects/propellent-new.png"),
    available: true,
  },
  {
    id: 4,
    name: "QuickDesk",
    description:
      "A robust backend solution designed to simplify administrative workflows and user operations. Built with Python, featuring RESTful APIs and database optimization for scalable operations management.",
    technologies: ["Python", "REST API", "Backend"],
    github: "https://github.com/BhupinderrSingh/QuickDesk",
    demo: "",
    image: require(".//../../public/projects/flixify.png"),
    available: true,
  },
  // {
  //   id: 4,
  //   name: "SkyWatch",
  //   description:
  //     "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current weather and forecast for the next 2 days in any city.",
  //   technologies: ["React", "CSS", "Chart.js"],
  //   github: "https://github.com/victorcodess/weather-forecast-website",
  //   demo: "https://sky-watch.vercel.app/",
  //   image: require(".//../../public/projects/skywatch-flip.png"),
  //   available: true,
  // },
  // {
  //   id: 4,
  //   name: "Alpaca Image Generator",
  //   description:
  //     "An image generator website that allows users to generate, combine, and download images.",
  //   technologies: ["React", "CSS", "Merge Images"],
  //   github: "https://github.com/victorcodess/alpaca-image-generator",
  //   demo: "http://alpaca-image-generator-beta.vercel.app",
  //   image: require(".//../../public/projects/alpaca-flip.png"),
  //   available: true,
  // },

  // {
  //   id: 5,
  //   name: "Link Shortener",
  //   description:
  //     "A website that reduces the length of your URL using Bit.ly's API",
  //   technologies: ["JavaScript", "CSS", "Bit.ly's API"],
  //   github: "https://github.com/victorcodess/url-shortener",
  //   demo: "https://url-shortener-nine-delta.vercel.app",
  //   image: require(".//../../public/projects/shortener-new.webp"),
  //   available: true,
  // },
  // {
  //   id: 6,
  //   name: "Carpooling Service",
  //   description:
  //     "TMTM helps Covenant University students find fellow students who are headed to the same location, so they can share a ride and split the cost.",
  //   technologies: ["Material UI", "React", "Formik"],
  //   github: "https://github.com/victorcodess/carpooling-service",
  //   demo: "",
  //   image: require(".//../../public/projects/carpool-new.webp"),
  //   available: false,
  // },
  // {
  //   id: 7,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require(".//../../public/projects/mlsc.png"),
  //   available: false,
  // },
];

export const designProjects = [];
