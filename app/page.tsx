const posts = [
  {
    title: "EMCA123 New Technologies ashkjhas fkjhasf h",
    tech: "typescript, design",
    desc: "New Technologies of ECMA 123,New Technologies of ECMA 123 such as the internet and potential",
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
  {
    title: "EMCA123 New Technologies",
    tech: "typescript, design",
    desc: "New Technologies of ECMA 123",
    tags: "Beginner, Developer, Frontend",
  },
];

import styles from "@/styles/Post.module.scss";
import { Clock4, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="container mx-auto">
        <div className="flex">
          <div className="container-left flex-1 h-24 w-3/5">
           <div className="intro">
              <h1>Vikash Viraj</h1>
              <p>Senior Full Stack Engineer at SoSafe GmbH</p>
           </div>
          </div>
          <div className="container-right flex-1 w-2/5">
            <div className="post-container">
              {posts.map((post, index) => {
                return (
                  <div className={styles.post}>
                    <div>
                      <div className={styles.tech}>{post.tech}</div>
                      <div className={styles.title}>{post.title}</div>
                      <div className={styles.desc}>{post.desc}</div>
                      <div className={styles.footer}>
                        <div className={styles.footerLeft}>
                          <div className={styles.icon}>
                            <Clock4 size={16} />
                          </div>
                          <div className={styles.readText}>2MIN</div>
                        </div>
                        <div className={styles.footerRight}>
                          <Link rel="noreferrer noopener" target="_blank" href={'/'}><ExternalLink className={styles.external} size={16} /></Link>
                        </div>
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
