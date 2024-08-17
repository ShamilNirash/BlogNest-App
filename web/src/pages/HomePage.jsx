import React from "react";
import MainLayout from "../components/MainLayout";
import HeroSection from "../components/HeroSection";

export default function HomePage() {
  return (
    <div className="bg-[#F9FCFF] z-10">
      <MainLayout>
        <HeroSection />
      </MainLayout>
    </div>
  );
}
