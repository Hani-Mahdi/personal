import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Gallery from "@/components/Gallery";
import ScrollTimeline from "@/components/ScrollTimeline";
import Welcome from "@/components/Welcome";
import Endeavors from "@/components/Endeavors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Intro />
        <Gallery />
        <ScrollTimeline />
        <Welcome />
        <Endeavors />
      </main>
      <Footer />
    </div>
  );
}
