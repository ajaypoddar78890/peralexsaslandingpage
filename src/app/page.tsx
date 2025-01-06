import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Empowering from "./sections/Empowring";
import Services from "./sections/services";
import Clientlogo from "./sections/Clientlogo";

export default function Home() {
  return (
    <div className="div">
      <Header />
      <Hero />
      <Empowering />
      <Services />
      <Clientlogo />
    </div>
  );
}
