import AboutView from "@/components/about";
import PresentationView from "@/components/presentation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <PresentationView />
      <AboutView />
    </main>
  )
}
