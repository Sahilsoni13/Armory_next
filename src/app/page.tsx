import TheMission from "@/componnent/Home/TheMission";
import Banner from "../componnent/Home/Banner";
import Deffense from "@/componnent/Home/Deffense";
import Ourclients from "@/componnent/Home/OurClients";
import Global from "@/componnent/Home/Global";
import Strategy from "@/componnent/Home/Strategy";
import SwiperSection from "@/componnent/Home/SwiperSection";
import MapSection from "@/componnent/Home/MapSection";
import TodoCalender from "@/componnent/Home/TodoCalender";
import ImageCompressor from "@/componnent/CompressDownloader";

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
      <MapSection/>
      <TodoCalender/>
      <ImageCompressor/>
    </>
  );
}
