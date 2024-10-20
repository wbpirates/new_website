import Image from "next/image";
import Navbar from "../../components/Navbar/Navbar.js";
import Footer from "../../components/Footer/Footer.js";
import Body from "../../components/Body/Body.js";
import { API_HOST } from "../../configs/api.config.js";

export default function Home() {
  return (
    <div>
      <Navbar host={API_HOST}/>
      <Body host={API_HOST} />
      <Footer host={API_HOST} />
    </div>
  );
}
