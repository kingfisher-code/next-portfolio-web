import Navbar from "@/component/Navbar";
import Header from "@/component/Header";
import About from "@/component/About";
import Services from "@/component/Services";
import Work from "@/component/work";
import Contact from "@/component/Contact";
export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
    </>
  );
}
