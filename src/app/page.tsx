import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] grain">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
