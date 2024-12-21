
import Dessert from "@/components/Dessert";
import Drink from "@/components/Drinks";
import Experience from "@/components/Experience";
import MainCours from "@/components/MainCourse";
import StarterMenu from "@/components/StartMenu";
import PartnersAndClients from "@/components/PartnerClient";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
export default function Menu() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <StarterMenu />
      <MainCours />
      <Experience />
      <Dessert />
      <Drink />
      <PartnersAndClients />
    </div>
  );
}