import React from "react";
import {
  BottomLeftAudienceStats,
  BottomRightAudienceStats,
  TopLeftAudienceStats,
  TopRightAudienceStats,
} from "./components";


export default function AudienceStats() {
  return (
    <div className="w-full h-full bg-gray-100 overflow-hidden">
      <div className="w-full h-full lg:flex lg:justify-between items-center mx-auto gap-10">
        <div className="mt-[50px] flex flex-col lg:ml-[6%] px-4">
          <TopLeftAudienceStats />
          <BottomLeftAudienceStats />
        </div>
        <div className="md:w-full md:h-[768px] mt-[70px] flex flex-col gap-y-6 md:mr-[10%] px-4">
          <TopRightAudienceStats />
          <BottomRightAudienceStats />
        </div>
      </div>
    </div>
  );
}
