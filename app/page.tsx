import BlogSidebar from "../components/blog/blog-sidebar/blog-sidebar";
import BlogCenter from "@/components/blog/blog-center/blog-center";
import ProfileWithLinks from "@/components/profile/profile-with-links";
import IntroSection from "@/components/profile/intro-section";

export default function Home() {
  return (
    <div className="relative">
      <div className="container mx-auto">
        <div className="flex">
          <div className="left-side bg-slate-200 h-16 w-[100%]">
            <IntroSection />
            <BlogCenter />
            <ProfileWithLinks />
          </div>
          <div className="right-side bg-slate-700 h-16  w-[100%]">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
