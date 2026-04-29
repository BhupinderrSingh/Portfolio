import { StaticImageData } from "next/image";
import alex from "../../public/samuel.avif";
import jerry from "../../public/jerry.avif";
import mauro from "../../public/mauro.jpeg";
import alan from "../../public/alan.jpeg";
import olamide from "../../public/olamide.jpeg";
import umar from "../../public/umar.jpeg";

export type reviewProps = {
  name: string;
  role: string;
  company: string;
  profileImg: StaticImageData;
  testimonial: string;
  index: number;
};

export const reviewDetails = [
  {
    name: "Prof. Rajesh Kumar",
    role: "Faculty Advisor",
    company: "CGC University",
    profileImg: alex,
    testimonial:
      "Bhupinder is an exceptional student with a strong grasp of blockchain technology and smart contracts. His dedication to learning Solidity and Web3 development is commendable, and he has great potential in the blockchain space.",
  },
  {
    name: "Tech Community Lead",
    role: "Community Organizer",
    company: "Tech Community",
    profileImg: jerry,
    testimonial:
      "Working with Bhupinder on various tech initiatives has been fantastic. He's skilled in both backend and blockchain development, bringing innovative ideas to solve complex problems. A true asset to any tech team.",
  },
  {
    name: "Open Source Contributor",
    role: "Developer",
    company: "Blockchain Community",
    profileImg: mauro,
    testimonial:
      "Bhupinder's contributions to our DeFi project were outstanding. His smart contract code was well-structured, secure, and efficient. His attention to security details is impressive for a student developer.",
  },
  {
    name: "AI Research Team Member",
    role: "ML Engineer",
    company: "AI Lab",
    profileImg: umar,
    testimonial:
      "Bhupinder demonstrated excellent skills in deep learning and AI model development. The CitriScan project showcased his ability to integrate real-world ML solutions with a user-friendly interface. Great collaboration experience!",
  },
];

