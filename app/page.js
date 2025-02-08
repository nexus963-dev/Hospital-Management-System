import Image from "next/image";
import Navbar from "../components/Navbar";
import Side_Navigation from "../components/Side_Navigation";
import Main from "../components/Main"
import Footer  from "../components/Footer";
import Achievements from "../components/achievements";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row item">
        <Side_Navigation />
        <Main />
      </div>

      <div className="achievement">
        <p></p>
      </div>
      
      <div>
        <Achievements />
      </div>

      <Footer />
    </>
  );
}
