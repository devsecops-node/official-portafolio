import AboutView from "@/components/about";
import ExperienceView from "@/components/experience";
import InfoFixed from "@/components/info-fixed";
import PresentationView from "@/components/presentation";
import ProyectsView from "@/components/proyects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <PresentationView />
      <AboutView />
      <ExperienceView />
      <ProyectsView/>
      {/* <InfoFixed /> */}
    </main>
  )
}
