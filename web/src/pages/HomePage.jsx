import React from "react";
import MainLayout from "../components/MainLayout";
import HeroSection from "../components/HeroSection";

export default function HomePage() {
  return (
    <div>
      <MainLayout>
        <HeroSection />
      </MainLayout>
    </div>
  );
}
