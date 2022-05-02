import React from "react";
import { HiUserGroup } from "react-icons/hi";
import { MdMale } from "react-icons/md";
import { BiFemaleSign } from "react-icons/bi";

export default function TopRightAudienceStats() {
  return (
    <div className="flex flex-col gap-y-11  mb:px-0">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h4 className="text-lg font-bold">Audience stats</h4>
          <p className="text-xs font-bold-300">
            Audience overview and gender splits
          </p>
        </div>
        <button className="rounded-[20px]  bg-[#053A67] text-white w-[97px] h-[32px] text-[10px]">
          Tool
        </button>
      </div>

      <div className="rounded-2xl bg-[#FFFFFF] w-full h-[40%]  md:h-[179px] flex md:flex-col md:items-center md:justify-center items-center justify-center">
        <div className="w-full md:flex md:justify-between my-11 px-4">
          <div className="flex justify-center py-4">
            <div className="flex flex-col items-center gap-y-8">
              <div className="flex items-center gap-x-4">
                <HiUserGroup className="w-5" />
                <h5 className="text-xs font-bold-300">All users</h5>
              </div>
              <div className="rounded-full bg-[#F2F2F2] h-[52px] w-[143px] flex items-center justify-center">
                <p className="text-xs font-bold-300">3661132728</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-4">
            <div className="flex flex-col items-center gap-y-8">
              <div className="flex items-center gap-x-4">
                <MdMale className="w-5" />
                <h5 className="text-xs font-bold-300">Male</h5>
              </div>
              <div>
                <div className="rounded-full bg-[#F2F2F2] h-[52px] w-[143px] flex items-center justify-center">
                  <p className="text-xs font-bold-300">282221</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-4">
            <div className="flex flex-col items-center gap-y-8">
              <div className="flex items-center gap-x-4">
                <BiFemaleSign className="w-5" />
                <h5 className="text-xs font-bold-300">Female</h5>
              </div>
              <div className="rounded-full bg-[#F2F2F2] h-[52px] w-[143px] flex items-center justify-center">
                <p className="text-xs font-bold-300">282221</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
