import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [portfolio, setPortfolio] = useState("featured");

  return (
    <>
      <Head>
        <title>Hynek Fišera | Web Development {"&"} UX Design</title>
      </Head>
      <section id="aboutme" className="my-16">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 px-4">
          <div className="my-auto">
            <h1 className="text-3xl font-semibold text-gray-800">
              Hey, I'm <span className="text-blue-600">Hynek</span>!
            </h1>
            <p className="text-lg text-gray-900 mt-4">I'm a Junior Full Stack Developer who loves creating cool projects with React, Next.js and Tailwind, and also have 6+ years of experience in graphic design and video editing.</p>
            <p className="text-lg text-gray-900 mt-2">
              Currently working on the <span className="font-semibold">Flairleap</span> app.
            </p>
            <div className="flex mt-4">
              <Link href="mailto:hynek@oneflair.co">
                <a className="btn btn-primary">Let's get in touch</a>
              </Link>
              <Link href="https://github.com/hynekfisera">
                <a className="btn btn-secondary ml-3">My GitHub</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="my-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-center text-4xl font-bold text-gray-700 mb-6">Portfolio</h2>
          <div className="grid grid-cols-4">
            <div onClick={() => setPortfolio("featured")} className={`text-sm text-center py-2 cursor-pointer ${portfolio === "featured" ? "bg-blue-500 border border-transparent text-white" : "text-gray-500 border border-gray-300 transition duration-200 hover:bg-gray-100"}`}>
              Featured
            </div>
            <div onClick={() => setPortfolio("development")} className={`text-sm text-center py-2 cursor-pointer ${portfolio === "development" ? "bg-blue-500 border border-transparent text-white" : "text-gray-500 border border-gray-300 transition duration-200 hover:bg-gray-100"}`}>
              Development
            </div>
            <div onClick={() => setPortfolio("design")} className={`text-sm text-center py-2 cursor-pointer ${portfolio === "design" ? "bg-blue-500 border border-transparent text-white" : "text-gray-500 border border-gray-300 transition duration-200 hover:bg-gray-100"}`}>
              Design
            </div>
            <div onClick={() => setPortfolio("myprojects")} className={`text-sm text-center py-2 cursor-pointer ${portfolio === "myprojects" ? "bg-blue-500 border border-transparent text-white" : "text-gray-500 border border-gray-300 transition duration-200 hover:bg-gray-100"}`}>
              My Projects
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
