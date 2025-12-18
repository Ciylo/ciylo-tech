import HeroSection from "./HeroSection";
import OurClients from "../../../components/-webComponents/OurClients";
import Specialities from "./Specialities";
import SolutionWay from "./solution/page";
import FeaturedWork from "./FeaturedWork";
import OurProjects from "./Projects";
import HappyClients from "./HappyClients";
import GetStarted from "@/components/-webComponents/GetStarted";

export default function HomeLanding() {
  return (
    <>
      <HeroSection />
      <OurClients />
      <Specialities/>
      <SolutionWay />
      <FeaturedWork />
      <OurProjects />
      <HappyClients />
      <GetStarted />
    </>
  );
}

