import { Clock4, ExternalLink } from "lucide-react";
import Link from "next/link";
import styles from "@/styles/Post.module.scss";

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

export default function BlogSidebar() {
  return (
    <div className="float-right">
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
                <Link rel="noreferrer noopener" target="_blank" href={"/"}>
                  <ExternalLink className="textprimary" size={16} />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
