import Image from "next/image";
import Navbar from "../../componets/Navbar/Navbar.js";
import Footer from "../../componets/Footer/Footer.js";
import Form from "../../componets/Form/Form.js";
import Body from "../../componets/Body/Body.js";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}
