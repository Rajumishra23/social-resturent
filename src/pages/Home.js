import React from "react";
import HeroSlider from "../components/Hero";
import CouponSection from "../components/CouponSection";
import LoyaltySection from "../components/LoyaltySection";
import SocialPages from "../components/SocialPage";
import ImageSlider from "../components/ImageSlider";
import InstagramSection from "../components/InstagramSection";
import SpecialsSection from "../components/SpecialSections";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <CouponSection />
      <br />
      <hr />
      <LoyaltySection />
      <SocialPages />
      <SpecialsSection/>
      <ImageSlider />
      <InstagramSection />
    </div>
  );
};

export default Home;
