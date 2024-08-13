import Image from "next/image";
// import Header from "../components/layout/Header";
import { Hero } from "@/components/layout/Hero";
import Events from "../components/Ui/Events";
export default function Home() {
  return (
    <>
      <Hero />
      <Events />
    </>
  );
}
