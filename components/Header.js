import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitch, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <header className="py-5 border-b border-gray-300">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <a className="h-8 w-10 flex items-center transition duration-200 hover:opacity-90">
            <img src="/assets/hf_indigo.svg" alt="Logo" />
          </a>
        </Link>
        <nav className="flex items-center">
          <div className="hidden sm:block">
            <Link href="/#portfolio">
              <a className="text-lg font-medium mr-4 hover:underline hover:decoration-2 hover:decoration-indigo-500">Portfolio</a>
            </Link>
            <Link href="/#aboutme">
              <a className="text-lg font-medium mr-4 hover:underline hover:decoration-2 hover:decoration-indigo-500">About me</a>
            </Link>
          </div>
          <Link href="https://twitter.com/hynekfisera">
            <a className="w-5 mr-2 ml-1 text-gray-500 hover:text-gray-700 transition duration-200">
              <FontAwesomeIcon icon={faTwitter} className="fa-lg" />
            </a>
          </Link>
          <Link href="https://youtube.com/phpmyarfi">
            <a className="w-5 mr-2 text-gray-500 hover:text-gray-700 transition duration-200">
              <FontAwesomeIcon icon={faYoutube} className="fa-lg" />
            </a>
          </Link>
          <Link href="https://twitch.tv/arfilive">
            <a className="w-5 mr-2 text-gray-500 hover:text-gray-700 transition duration-200">
              <FontAwesomeIcon icon={faTwitch} className="fa-lg" />
            </a>
          </Link>
          <Link href="https://linkedin.com/in/hynekfisera">
            <a className="w-5 mr-2 text-gray-500 hover:text-gray-700 transition duration-200">
              <FontAwesomeIcon icon={faLinkedin} className="fa-lg" />
            </a>
          </Link>
          <Link href="https://github.com/hynekfisera">
            <a className="w-5 text-gray-500 hover:text-gray-700 transition duration-200">
              <FontAwesomeIcon icon={faGithub} className="fa-lg" />
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
