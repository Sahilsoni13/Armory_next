import TheMission from "@/componnent/Home/TheMission";
import Banner from "../componnent/Home/Banner";
import Deffense from "@/componnent/Home/Deffense";
import Ourclients from "@/componnent/Home/OurClients";
import Global from "@/componnent/Home/Global";
import Strategy from "@/componnent/Home/Strategy";
import SwiperSection from "@/componnent/Home/SwiperSection";

export default function Home() {
  return (
    <>
      <Banner/>
      <TheMission/>
      <Deffense/>
      <Ourclients/>
      <Global/>
      <Strategy/>
      <SwiperSection/>
    </>
  );
}
