"use client";
import React from "react";
import { Cards } from "./cards";
import { TopCards } from "./top-cards"; 
import { Card2 } from "./card2";
import { Banner } from "./banner";
import { BottomCards } from "./bottom-cards";
import { Distributor } from "./distributor";
import { Footer } from "@/components/common/Footer";
import { GetInTouch } from "./get-in-touch";
import { Design } from "./design";

export const HomePage = () => {
  return (
    <>
      <Banner />
      <Card2 />
      <TopCards />
      <Cards />
      <BottomCards />
      <Distributor />
      <Design />
      <GetInTouch /> 
      <Footer />
    </>
  );
};
