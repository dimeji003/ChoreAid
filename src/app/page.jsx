import Image from "next/image";
import Main from "./components/Home";
import Video from "./components/Video";
import Searchbar from "./components/Searchbar";
import Services from "./components/Services";
import Meetourteam from "./components/Meetourteam";
import Reviews from "./components/Reviews";

export default function Home() {
  return (
    <div>
      <Main />
      <Video />
      <Searchbar />
      <Services />
      <Meetourteam />
      <Reviews />
      
    </div>
  );
}
