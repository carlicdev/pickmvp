import Image from "next/image";
import Hero from "./components/Hero";
import PostCard from "./components/PostCard";
import PickCard from "./components/PickCard";
import Subscribe from "./components/Subscribe";
import LastPicks from "./components/LastPicks";
import PostList from "./components/PostList";
import { getPicks, getPosts } from "./services/graphql";
import StreaksSection from "./components/StreaksSection";

export default async function Home() {
  const posts = await getPosts();
  const picks = await getPicks();

  return (
    <div>
      <Hero />
      <StreaksSection />
      <div className="flex flex-wrap max-w-7xl mx-auto">
        <div className="order-2 lg:order-1 w-full flex flex-wrap lg:w-2/3">
          <PostList posts={posts} />
        </div>
        <div className="order-1 lg:order-2 w-full lg:w-1/3 px-5 lg:pl-5 lg:pr-0">
          <div className="flex flex-col gap-5">
            <LastPicks picks={picks} />
            <Subscribe />
          </div>
        </div>
      </div>
    </div>
  );
}
