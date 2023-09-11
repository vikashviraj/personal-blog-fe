"use client";

import { useState } from "react";

const blogPosts = [
  {
    date: "FEB 15",
    title: "AI product management: Research, requirements and scope",
    duration: "1 min read",
  },
  {
    date: "FEB 11",
    title: "Retailers going digital payment only don’t save money",
    duration: "1 min read",
  },
  {
    date: "FEB 08",
    title: "How to Ergonomically Optimize Your Workspace",
    duration: "2 min read",
  },
  {
    date: "JAN 31",
    title: "When tech brands get illustration right",
    duration: "1 min read",
  },
  {
    date: "JAN 29",
    title: "Tips for planning a successful business conference",
    duration: "1 min read",
  },
  {
    date: "JAN 27",
    title: "Take crazy marketing ideas seriously while brainstorming",
    duration: "1 min read",
  },
  {
    date: "JAN 24",
    title: "A gaming company’s office embraces an anti-tech atmosphere",
    duration: "1 min read",
  },
  {
    date: "JAN 21",
    title: "We added these books to our office library this week",
    duration: "1 min read",
  },
  {
    date: "JAN 15",
    title: "Effective ways to ensure your remote team feels like part of HQ",
    duration: "1 min read",
  },
  {
    date: "JAN 08",
    title: "How to create a UX research team on your own",
    duration: "1 min read",
  },
];

export default function BlogCenter() {
  const [currentPostCount, updatePostCount] = useState(5);

  return (
    <div className="mt-20">
      <h4 className="text-lg uppercase font-semibold mb-5">Productivity:</h4>
      <div className="">
        {blogPosts.map((post, index) => {
          if (index + 1 <= currentPostCount) {
            return (
              <div
                key={index}
                className="flex p-4 border-b-2 last:border-none cursor-pointer border-[#202022] justify-between hover:ml-4 transition-all"
              >
                <div className="text-[#C64C32] text-sm mr-6">{post.date}</div>
                <div className="overflow-hidden overflow-ellipsis whitespace-nowrap w-[80%]">
                  {post.title}
                </div>
                <div className="text-sm flex">
                  <div className="text-[#7C7C7D] text-[10px] mt-[1px]">
                    {post.duration.toLocaleUpperCase()}
                  </div>
                  {/* <ChevronRightIcon size={16} className="text-[#7C7C7D]" /> */}
                </div>
              </div>
            );
          } else {
            <></>;
          }
        })}
      </div>
      <div className="flex flex-col items-center mt-5">
        {currentPostCount <= blogPosts.length && (
          <button
            className="hover:outline hover:outline-1 bg-[#202022] px-6 py-2 text-white text-xs"
            type="button"
            onClick={() => updatePostCount(currentPostCount + 2)}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}
