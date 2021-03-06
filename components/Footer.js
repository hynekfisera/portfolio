import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="pb-9">
      <div className="max-w-screen-xl mx-auto px-4">
        <hr className="border-gray-300 mb-8" />
        <div className="sm:flex sm:justify-between">
          <div>
            &copy; {new Date().getFullYear()} | Made with <FontAwesomeIcon icon={faMugHot} className="w-5 inline-block text-gray-700" /> in{" "}
            <a href="https://www.google.com/maps/place/Hradec+Kr%C3%A1lov%C3%A9/" target="_blank" rel="noreferrer noopener" className="hover:underline">
              Hradec Králové
            </a>
          </div>
          <div>
            Build with{" "}
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer noopener" className="hover:underline">
              Next.js
            </a>
            ,{" "}
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer noopener" className="hover:underline">
              Tailwind
            </a>{" "}
            and{" "}
            <a href="https://vercel.com/" target="_blank" rel="noreferrer noopener" className="hover:underline">
              Vercel
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
