import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { ChevronLeftIcon } from "@heroicons/react/outline";

import AudienceUser from "../../AudienceUser/AudienceUser";

export default function BottomLeftAudienceStats() {
  return (
    <div className="lg:w-[727px] lg:h-[661px] lg:relative">
      {/* row1 */}
      <div className="md:grid md:grid-cols-2 md:gap-6 ">
        <div className="md:flex md:flex-col md:gap-y-10">
          <AudienceUser />
          <AudienceUser />
          <AudienceUser />
          <AudienceUser />
          <AudienceUser />
        </div>
        <div className="md:flex md:flex-col md:gap-y-10">
          <AudienceUser />
          <AudienceUser />
          <AudienceUser />
          <AudienceUser />
          <AudienceUser />
        </div>
      </div>
      {/* pagination */}
      <div className="flex items-center space-x-5 absolute right-4 mt-4">
        <div className="hover:rounded-full border-0 border-[#2F80ED]">
          <ChevronLeftIcon className="w-4 text-[#2F80ED] " />
        </div>
        <div className="px-4 py-2 text-[#2F80ED] text-[10px] rounded-full hover:bg-[#053A67] hover:text-white">
          1
        </div>
        <div className="px-4 py-2 text-[#2F80ED] text-[10px] rounded-full hover:bg-[#053A67] hover:text-white">
          2
        </div>
        <div className="px-4 py-2 text-[#2F80ED] text-[10px] rounded-full hover:bg-[#053A67] hover:text-white">
          3
        </div>
        <ChevronRightIcon className="w-4 text-[#2F80ED]" />
      </div>
    </div>
  );
}
