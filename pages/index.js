import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hynek Fišera | Web Development {"&"} UX Design</title>
      </Head>
      <section id="aboutme" className="my-16">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2">
          <div className="my-auto">
            <h1 className="text-3xl font-semibold">Hey, I'm Hynek!</h1>
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
    </>
  );
}
