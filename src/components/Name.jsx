"use client";
import { TypeAnimation } from "react-type-animation";

const Name = () => {
  return (
    <>
      <TypeAnimation
        cursor={true}
        sequence={[
          100,
          "Om Ramanuj.",
          900,
          "Software Developer.",
          900,
          "Om Ramanuj",
         
        ]}
        speed={40}

      />
    </>
  );
};

export default Name;
