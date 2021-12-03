import React from "react";
import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faInstagram, faLinkedin, faSpotify, faTwitch, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Links() {
  const links = [
    {
      title: "Portfolio",
      icon: faGlobe,
      href: "/",
    },
    {
      title: "GitHub",
      icon: faGithub,
      href: "https://github.com/hynekfisera",
    },
    {
      title: "LinkedIn",
      icon: faLinkedin,
      href: "https://linkedin.com/in/hynekfisera",
    },
    {
      title: "YouTube",
      icon: faYoutube,
      href: "https://youtube.com/phpmyarfi",
    },
    {
      title: "Twitch",
      icon: faTwitch,
      href: "https://twitch.tv/arfilive",
    },
    {
      title: "Twitter",
      icon: faTwitter,
      href: "https://twitter.com/hynekfisera",
    },
    {
      title: "Instagram",
      icon: faInstagram,
      href: "https://instagram.com/hynekfisera",
    },
    {
      title: "Discord",
      icon: faDiscord,
      href: "https://arfi.cz/discord",
    },
    {
      title: "Spotify",
      icon: faSpotify,
      href: "https://open.spotify.com/user/hynekfisera",
    },
  ];

  return (
    <>
      <Head>
        <title>Links - Hynek Fišera | Web Development {"&"} UX Design</title>
      </Head>
      <section id="links" className="py-16">
        <div className="max-w-screen-sm mx-auto px-4">
          <h1 className="text-center text-3xl font-semibold mb-8">Links</h1>
          {links.map((link, i) => (
            <Link href={link.href} key={i}>
              <a className="mb-4 block w-full text-lg font-medium text-center text-gray-700 border border-gray-700 rounded-md py-2 transition duration-200 hover:text-white hover:bg-gray-700">
                {link.icon && <FontAwesomeIcon icon={link.icon} />} {link.title}
              </a>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
