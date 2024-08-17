import React from "react";
import Header from "./Header";
import Footer from "./Footer"

export default function MainLayout({children}) {
  return (
    <div className="bg-[#F9FCFF] ">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
