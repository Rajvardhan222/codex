import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/navBar/NavBar";
import HeroSection from "@/components/Hero/HeroSection";
import FeatureCard from "@/components/Feature/FeatureCard";
import Recognisation from "@/components/Recognisation/Recognisation";
import FancyBreaker from "@/components/FancyBreaker/FancyBreaker";
import Section from "@/components/Section/Section";
import SectionTwo from "@/components/Section/SectionTwo";
import SectionThree from "@/components/Section/SectionThree/SectionThree";
import SectionFour from "@/components/Section/SectionFour/SectionFour";
import NewsSection from "@/components/Section/NewsSection/News";
import DownloadApp from "@/components/Section/DownloadApp/DownloadApp";
import EnquiryForm from "@/components/Section/Form/Form";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
      <main

          >

    <TopHeader/>
          <Navbar/>
          <div className={"mx-16 mt-5"}>
              <HeroSection/>
              <div className={"grid grid-cols-4 lg:grid lg:grid-cols-2 gap-7  justify-around mt-7"}>
                  <FeatureCard imagePath={"/images/Location.png"} title={"50+"} title2={"Cities"} gradient={"from-[#FFFFFF4D] to-[#1DDDDF36]"}/>
                  <FeatureCard imagePath={"/images/Notes.png"} title={"50+"} title2={"Cities"} gradient={""}/>
                  <FeatureCard imagePath={"/images/Graduation Cap.png"} title={"50+"} title2={"Cities"} gradient={"from-[#FFFFFF4D] to-[#1DDDDF36]"}/>
                  <FeatureCard imagePath={"/images/University1.png"} title={"50+"} title2={"Cities"} gradient={"from-[#FFFFFF4D] to-[#2F9AE94D]"}/>

              </div>

              <FancyBreaker/>
          </div>
              <Recognisation/>
          <Section/>
          <SectionTwo/>
          <SectionThree/>
          <SectionFour/>
          <NewsSection/>
          <DownloadApp/>
          <EnquiryForm/>
          <Footer/>
      </main>
      );
}
