import AboutView from "@/components/about";
import ExperienceView from "@/components/experience";
import InfoFixed from "@/components/info-fixed";
import PresentationView from "@/components/presentation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <PresentationView />
      <AboutView />
      <ExperienceView />
      <div id="Works" className="h-screen">
        pqweqwe
      </div>
      {/* <InfoFixed /> */}
    </main>
  )
}
