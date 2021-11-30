import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <header className="py-5 border-b border-gray-300">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <a className="text-xl sm:text-2xl font-semibold hover:text-gray-700 transition duration-200">Hynek Fišera</a>
        </Link>
        <nav className="flex items-center">
          <div className="hidden sm:block">
            <Link href="/#portfolio">
              <a className="text-lg font-medium mr-4 hover:underline">Portfolio</a>
            </Link>
            <Link href="/#aboutme">
              <a className="text-lg font-medium mr-4 hover:underline">About</a>
            </Link>
            <Link href="/#projects">
              <a className="text-lg font-medium mr-4 hover:underline">Projects</a>
            </Link>
          </div>
          <Link href="https://twitter.com/hynekfisera">
            <a className="w-6 mr-2 ml-1 text-gray-500 hover:text-gray-700 transition duration-200">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </Link>
          <Link href="https://youtube.com/phpmyarfi">
            <a className="w-6 mr-2 text-gray-500 hover:text-gray-700 transition duration-200">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </Link>
          <Link href="https://linkedin.com/in/hynekfisera">
            <a className="w-6 mr-2 text-gray-500 hover:text-gray-700 transition duration-200">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </Link>
          <Link href="https://github.com/hynekfisera">
            <a className="w-6 text-gray-500 hover:text-gray-700 transition duration-200">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
