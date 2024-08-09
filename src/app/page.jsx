import Image from "next/image";
import Main from "./components/Home";
import Video from "./components/Video";
import Searchbar from "./components/Searchbar";
import Services from "./components/Services";
import Meetourteam from "./components/Meetourteam";
import Reviews from "./components/Reviews";
import Partners from "./components/Partners";
import Projects from "./components/Projects";
import Keypoints from "./components/Keypoints";

export default function Home() {
  return (
    <div>
      <Main />
      <Video />
      <Searchbar />
      <Services />
      <Meetourteam />
      <Reviews />
      <Partners />
      <Projects />
      <Keypoints />
      
    </div>
  );
}
