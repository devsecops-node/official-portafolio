import AboutView from "@/components/about";
import InfoFixed from "@/components/info-fixed";
import PresentationView from "@/components/presentation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <PresentationView />
      <AboutView />
      <InfoFixed/>
    </main>
  )
}
