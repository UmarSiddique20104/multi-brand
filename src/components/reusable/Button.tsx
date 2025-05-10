"use client";
import React from "react";
type MyComponentProps = {
  text: string;
  className?: string;
  padding?: string;
};
function Button({ text, className,padding }: MyComponentProps) {
  return (
    <div>
      <button
        className={`flex gap-2.5 font-titillium ${className} p-2.5 bg-white hover:bg-transparent border border-white  transition-colors duration-500 ease-in-out rounded-[4px] w-fit cursor-pointer font-normal md:text-xl sm:text-lg text:base text-black hover:text-white ${padding}`}
        type="submit"
      >
        <span className="text-center w-full">{text}</span>
      </button>
    </div>
  );
}

export default Button;
