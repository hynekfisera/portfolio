import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import AcewillLogo from "/public/portfolio/acewill.png";
import AcewillImage from "/public/portfolio/portfolioAcewill.webp";
import GarnetLogo from "/public/portfolio/garnet.svg";
import GarnetImage from "/public/portfolio/portfolioGarnet.webp";
import EryesLogo from "/public/portfolio/eryes.png";
import EryesImage from "/public/portfolio/portfolioEryes.webp";
import VrccLogo from "/public/portfolio/vrcc.png";
import VrccImage from "/public/portfolio/portfolioVrcc.webp";
import NyliumLogo from "/public/portfolio/nylium.png";
import NyliumImage from "/public/portfolio/portfolioNylium.webp";
import Download2Logo from "/public/portfolio/default.png";
import Download2Image from "/public/portfolio/portfolioDownload2.png";
import UtilolLogo from "/public/portfolio/default.png";
import UtilolImage from "/public/portfolio/portfolioUtilol.png";

export default function Home() {
  const [portfolio, setPortfolio] = useState("featured");

  const projects = [
    {
      img: AcewillImage,
      logo: AcewillLogo,
      name: "Acewill",
      description: "I designed a prototype of the Acewill operating system distributed by Aprocle.",
      links: [{ text: "Learn more", href: "http://aprocle.com/", type: "secondary" }],
      categories: ["featured", "design"],
    },
    {
      img: GarnetImage,
      logo: GarnetLogo,
      name: "Garnet",
      description: "I designed a logo for the Garnet operating system",
      links: [{ text: "Learn more", href: "http://github.com/GarnetOS", type: "secondary" }],
      categories: ["featured", "design"],
    },
    {
      img: EryesImage,
      logo: EryesLogo,
      name: "Eryes",
      description: "I created livestream overlays and social media posts for the Eryes league",
      links: [{ text: "Learn more", href: "http://www.twitch.tv/eryesloleague", type: "secondary" }],
      categories: ["featured", "design"],
    },
    {
      img: VrccImage,
      logo: VrccLogo,
      name: "VRCC",
      description: "I developed a website for the VR Component Constructor project",
      links: [{ text: "The client", href: "http://micromium.net/", type: "secondary" }],
      categories: ["featured", "development"],
    },
    {
      img: NyliumImage,
      logo: NyliumLogo,
      name: "Nylium",
      description: "I coded a website for the Nylium Survival minecraft server",
      links: [],
      categories: ["featured", "development", "myprojects"],
    },
    {
      img: Download2Image,
      logo: Download2Logo,
      name: "Download v2",
      description: "Download v2 is a full-stack MERN application used to share links and files.",
      links: [{ text: "Source code", href: "https://github.com/hynekfisera/download-new", type: "secondary" }],
      categories: ["development", "myprojects"],
    },
    {
      img: UtilolImage,
      logo: UtilolLogo,
      name: "Utilol",
      description: "Very simple project and my first experience with using the Riot Games API.",
      links: [{ text: "Source code", href: "https://github.com/hynekfisera/utilol", type: "secondary" }],
      categories: ["development", "myprojects"],
    },
  ];

  return (
    <>
      <Head>
        <title>Hynek Fišera | Web Development {"&"} UX Design</title>
      </Head>
      <section id="aboutme" className="py-16">
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="my-auto">
            <h1 className="text-3xl font-semibold text-gray-800">
              Hey, I'm <span className="text-blue-600">Hynek</span>!
            </h1>
            <p className="text-lg text-gray-900 mt-4">
              I'm a Junior Web Developer and I love creating cool projects with <span className="font-semibold">React</span>, <span className="font-semibold">Next.js</span> and <span className="font-semibold">Tailwind</span>. I also have experience in UI {"&"} UX design and video editing.
            </p>
            <p className="text-lg text-gray-900 mt-2">
              You can find some of the projects I've been working on below or you can check my <span className="font-semibold">GitHub</span> where I'm sharing my coding-related projects!
            </p>
            <p className="text-lg text-gray-900 mt-2">
              I'm currently working on the <span className="font-semibold">Swiftpass</span> app and livestreaming the development on my <span className="font-semibold">Twitch</span> channel.
            </p>
            <div className="flex flex-wrap mt-4">
              <Link href="mailto:hynek@oneflair.co">
                <a className="btn btn-primary mr-3 mb-2">Let's get in touch</a>
              </Link>
              <Link href="https://github.com/hynekfisera">
                <a className="btn btn-secondary mb-2">My GitHub</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8" id="portfolio">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-700 mb-6">Portfolio</h2>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4">
            <div onClick={() => setPortfolio("featured")} className={`text-sm text-center py-2 cursor-pointer rounded-md ${portfolio === "featured" ? "bg-blue-500 border border-transparent text-white" : "text-gray-500 border border-gray-300 transition duration-200 hover:bg-gray-100"}`}>
              Featured
            </div>
            <div onClick={() => setPortfolio("development")} className={`text-sm text-center py-2 cursor-pointer rounded-md ${portfolio === "development" ? "bg-blue-500 border border-transparent text-white" : "text-gray-500 border border-gray-300 transition duration-200 hover:bg-gray-100"}`}>
              Development
            </div>
            <div onClick={() => setPortfolio("design")} className={`text-sm text-center py-2 cursor-pointer rounded-md ${portfolio === "design" ? "bg-blue-500 border border-transparent text-white" : "text-gray-500 border border-gray-300 transition duration-200 hover:bg-gray-100"}`}>
              Design
            </div>
            <div onClick={() => setPortfolio("myprojects")} className={`text-sm text-center py-2 cursor-pointer rounded-md ${portfolio === "myprojects" ? "bg-blue-500 border border-transparent text-white" : "text-gray-500 border border-gray-300 transition duration-200 hover:bg-gray-100"}`}>
              My Projects
            </div>
          </div>
          <div className="text-sm text-gray-400 mt-2">Select a category to filter and view additional projects</div>
          <div className="mt-8">
            {projects.map((project) => {
              if (project.categories.includes(portfolio)) {
                return (
                  <div key={project.name} className="flex flex-col sm:even:flex-row-reverse sm:flex-row mb-16 sm:mb-12 md:mb-0">
                    <div className="sm:w-1/2 sm:px-4 md:px-16">
                      <Image src={project.img} alt={project.name} />
                    </div>
                    <div className="sm:w-1/2 flex flex-col justify-center">
                      <div className="flex items-center mb-4">
                        <div className="h-12 w-12 mr-2 flex items-center justify-center">
                          <Image src={project.logo} alt={project.name + "logo"} />
                        </div>
                        <span className="text-3xl font-bold text-gray-800">{project.name}</span>
                      </div>
                      <p className="text-2xl mb-3">{project.description}</p>
                      <div className="flex">
                        {project.links.map((link, i) => {
                          return (
                            <Link href={link.href} key={i}>
                              <a className={`text-xl font-semibold transition duration-200 ${link.type === "primary" ? "text-blue-500 hover:text-blue-700" : "text-gray-500 hover:text-gray-700"}`}>{link.text}</a>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
}
