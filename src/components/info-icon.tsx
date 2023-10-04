"use client";
import React, { useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export type InfoIconProps = {
  content: string;
};

function InfoIcon({ content }: InfoIconProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const handleClick = () => {
    setShowTooltip((prev) => !prev);
  };

  return (
    <div className="inline-flex h-5 w-5 align-middle">
      <InformationCircleIcon
        className="cursor-pointer text-lg text-blue-500 hover:text-blue-800"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      ></InformationCircleIcon>

      {showTooltip && (
        <div className="absolute left-1/4 top-full mt-2 w-80 -translate-x-3/4 rounded border border-gray-300 bg-white px-4 py-2 shadow-lg md:left-1/2 md:-translate-x-1/2">
          <span className="text-sm font-normal text-gray-700">{content}</span>
        </div>
      )}
    </div>
  );
}

export default InfoIcon;
