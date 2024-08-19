import React from "react";
import MainLayout from "../components/MainLayout";
import HeroSection from "../components/HeroSection";
import Article from "../components/Article";

export default function HomePage() {
  return (
    <>
      <MainLayout>
        <HeroSection />
        <Article />
      </MainLayout>
    </>
  );
}
