import React from "react";
import { VscSearch } from "react-icons/vsc";
import { AiOutlineCaretDown } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";
export default function TopLeftAudienceStats() {
  return (
    <div className=" mb-6 md:flex md:justify-between md:items-center mb-10">
      {/* activity-title */}
      <div className="md:flex md:flex-col my-4">
        <h4 className="text-lg font-bold">Audience</h4>
        <p className="text-xs font-bold-300">
          All the audience that the shop has over ....{" "}
        </p>
      </div>
      {/* tools-bar */}
      <div className="flex justify-between gap-x-4 items-center">
        <div className="rounded-[20px] flex w-[161.13px] h-[49px] bg-[#FFFFFF] items-center px-4 gap-x-2">
          <VscSearch className="text-[#2F80ED] w-5" />
          <input
            placeholder="Search ..."
            className="outline-none w-full text-[10px]"
          />
        </div>
        <div>
          <FiFilter className="text-[#2F80ED] w-[#17px] h-[13px]" />
        </div>
        <div className="rounded-[20px] flex w-[161.13px] h-[49px] bg-[#FFFFFF] items-center justify-between px-6 gap-x-2">
          <p className="text-[#000] text-[10px]">All</p>
          <AiOutlineCaretDown className="text-[#2F80ED]" />
        </div>
      </div>
    </div>
  );
}
