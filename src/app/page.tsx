import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Empowering from "./sections/Empowring";
import Services from "./sections/services";
import Clientlogo from "./sections/Clientlogo";
import Teams from "./sections/Teams";
import Calltoaction from "./sections/Calltoaction";
import Blog from "./sections/blog";

export default function Home() {
  return (
    <div className="div">
      <Header />
      <Hero />
      <Empowering />
      <Services />
      <Clientlogo />
      <Teams />
      <Blog />
      <Calltoaction />
    </div>
  );
}
