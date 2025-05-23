import Navbar from "@/components/Layout/Navbar";

import Hero from "./home/Hero";
import Work from "./home/Work";
import Footer from "@/components/Layout/Footer";
import Summery from "@/pages/home/Summery";
import WebAbout from "./home/WebAbout";
import WebProcess from "./home/WebProcess";
import ClientReview from "./home/ClientReview";
import Chat from "./home/Chat";



const Home = () => {


  return (
    <div className="font-poppins">
      <Hero />
      <Summery />
      <WebAbout />
      <Work />
      <WebProcess />
      <ClientReview />
     <Chat />
    </div>
  );
};

export default Home;
