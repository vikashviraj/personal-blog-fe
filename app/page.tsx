const posts = [
  {
    title: "Markdown: Complete Guide for Beginner",
    tech: "typescript, design",
    desc: "New Technologies of ECMA 123,New Technologies of ECMA 123 such as the internet and potential",
    tags: "Beginner, Developer, Frontend",
  },
  {
    title: "JWT: A Game Changer of TypeScript",
    tech: "typescript, design",
    desc: "New Technologies of ECMA 123",
    tags: "Beginner, Developer, Frontend",
  },
  {
    title: "EMCA123 New Technologies",
    tech: "typescript, design",
    desc: "New Technologies of ECMA 123",
    tags: "Beginner, Developer, Frontend",
  },
  {
    title: "EMCA123 New Technologies",
    tech: "typescript, design",
    desc: "New Technologies of ECMA 123",
    tags: "Beginner, Developer, Frontend",
  },
  {
    title: "EMCA123 New Technologies",
    tech: "typescript, design",
    desc: "New Technologies of ECMA 123",
    tags: "Beginner, Developer, Frontend",
  },
  {
    title: "EMCA123 New Technologies",
    tech: "typescript, design",
    desc: "New Technologies of ECMA 123",
    tags: "Beginner, Developer, Frontend",
  },
  {
    title: "EMCA123 New Technologies",
    tech: "typescript, design",
    desc: "New Technologies of ECMA 123",
    tags: "Beginner, Developer, Frontend",
  },
  {
    title: "EMCA123 New Technologies",
    tech: "typescript, design",
    desc: "New Technologies of ECMA 123",
    tags: "Beginner, Developer, Frontend",
  },
];

import styles from "@/styles/Post.module.scss";
import { Clock4, ExternalLink, Github, RatioIcon, Star, StarsIcon, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const project = [1,2,3,4]

export default function Home() {
  return (
    <div className="h-screen relative">
      <div className="container mx-auto">
        <div className="flex gap-20 justify-around">
          <div className="flex-1 flex flex-col justify-start ml-20">
            <div className="mt-20">
              <h1 className="text-6xl font-bold leading-normal">
                Vikash Viraj
              </h1>
              <p className="text-xl font-medium">
                Senior Full Stack Engineer at SoSafe GmbH
              </p>
              <div className="mt-8 text-md leading-10">
                I build open-source front-end libraries at{" "}
                <a
                  className="underline"
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  SoSafe GmbH
                </a>{" "}
                and host two tech podcasts:{" "}
                <a
                  className="underline"
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Developer Experience
                </a>{" "}
                and{" "}
                <a
                  className="underline"
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Entre Devs.
                </a>
                In my spare time, I share what I learn on my{" "}
                <a
                  className="underline"
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  blog
                </a>{" "}
                and speak at{" "}
                <a
                  className="underline"
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  tech conferences
                </a>{" "}
                around the world.
              </div>
            </div>
            <div className="mt-20">
            <h4 className="text-lg uppercase font-semibold mb-3">Projects:</h4>
            <div className="grid grid-rows-2 grid-flow-col gap-4">
              {project.map((items)=>{
                return(
                  <div key={items} className="flex flex-col justify-around shadow-md hover:outline hover:outline-1 hover:outline-offset-4 px-4 py-2 h-40 w-[400px] bg-[#202022]">
                <p className="text-lg font-normal">deno/LocalLogger</p>
                <p className="text-xs">I build open-source front-end libraries at Algolia and host two tech podcasts: Developer Experience and Entre Devs.</p>
              <div className="flex justify-between items-center">
                <div className="flex"><Star fill="#fafafa" size={13} /><span className="text-xs ml-1">6,021</span></div>
                <ExternalLink size={16} />
              </div>
              </div>
                )
              })
            }
              </div>
            </div>
            <div className="absolute font-normal bottom-10 flex justify-between w-1/6">
              <Image
                className="rounded-full transition-all hover:scale-125"
                alt="profile"
                height={55}
                width={55}
                src="/img/vikash-viraj.jpeg"
              />
              <div className="flex justify-between items-center">
                <Twitter fill="#fafafa" size={16} />
                <span className="text-sm mx-3">Twitter</span>
                <ExternalLink size={16} />
              </div>
              <div className="flex justify-between items-center">
                <Github fill="#fafafa" size={16} />
                <span className="text-sm mx-3">Github</span>
                <ExternalLink size={16} />
              </div>
            </div>
            
          </div>
          <div className="flex flex-1 justify-end">
            <div className="post-container">
              {posts.map((post, index) => {
                return (
                  <div key={index} className={styles.post}>
                    <div>
                      <div className={styles.tech}>{post.tech}</div>
                      <div className={styles.title}>{post.title}</div>
                      <div className={styles.desc}>{post.desc}</div>
                      <div className="flex justify-between mt-4">
                        <div className="flex items-center bgprimary">
                          <Clock4 size={16} className="mr-1 textprimary" />
                          <span className="textsecondary text-sm">2MIN</span>
                        </div>
                        <Link
                          rel="noreferrer noopener"
                          target="_blank"
                          href={"/"}
                        >
                          <ExternalLink className="textprimary" size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
