// src/App.tsx
import React from "react";
import Button from "./components/button";
import Footer from "./components/footer";

const Heading: React.FC<{ text: string }> = ({ text }) => {
  return (
    <h2 className="text-[30.29px] text-green_dark leading-[160%] text-center">{text}</h2>
  );
};

export const App: React.FC = () => {
  return (
    <>
      <h1 className="xl:text-[36.29px] lg:text-[30.29px] md:text-[22.29px] text-[18px] leading-[160%] text-green_light text-center">
        StarkDefi Component Lib
      </h1>
      <div className="flex flex-col items-center">
        <Heading text="Buttons" />
        <div className="flex gap-3">
          <Button
            className="txl:text-[18px]  md:text-[14px] text-[12px]"
            btnType="ringed"
          >
            <p className="flex gap-3 items-center py-1">Join Our Community</p>
          </Button>
          <Button className="xl:text-[18px] md:text-[14px] text-[12px] text-green_light bg-green_2 rounded">
            <p className="flex gap-3 items-center py-1">Contact Us</p>
          </Button>
        </div>
      </div>
      <div className="mt-10">
      <Heading text="Footer" />
        <Footer />
      </div>
    </>
  );
};
