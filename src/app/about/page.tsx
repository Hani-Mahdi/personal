import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import PersonalInterests from "@/components/PersonalInterests";
import ValuesMission from "@/components/ValuesMission";
import CareerGoals from "@/components/CareerGoals";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <AboutHero />
        <PersonalInterests />
        <ValuesMission />
        <CareerGoals />
      </main>
      <Footer />
    </div>
  );
}
