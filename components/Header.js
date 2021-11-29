import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-5 border-b border-gray-300">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-2xl font-bold">Hynek Fišera</span>
        <nav>
          <Link href="/">
            <a className="text-lg mr-4 hover:underline">Portfolio</a>
          </Link>
          <Link href="/about">
            <a className="text-lg mr-4 hover:underline">About me</a>
          </Link>
          <Link href="mailto:hynek@oneflair.co">
            <a className="btn btn-primary ml-1">Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
