import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import ScrollTimeline from "@/components/ScrollTimeline";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Gallery />
        <ScrollTimeline />
        <Welcome />
      </main>
    </div>
  );
}
