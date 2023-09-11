import { ExternalLink, Github, Twitter } from "lucide-react";
import Image from "next/image";

export default function ProfileWithLinks() {
  return (
    <div className="fixed font-normal bottom-10 flex justify-between w-1/6">
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
  );
}
