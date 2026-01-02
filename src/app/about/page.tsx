import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <AboutHero />
      </main>
    </div>
  );
}
