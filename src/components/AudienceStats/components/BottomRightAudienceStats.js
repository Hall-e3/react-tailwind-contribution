import React from "react";
import { HiUserGroup } from "react-icons/hi";
import { MdMale } from "react-icons/md";
import { BiFemaleSign } from "react-icons/bi";
import { BellIcon } from "@heroicons/react/outline";
export default function BottomRightAudienceStats() {
  return (
    <div className="flex flex-col gap-y-11 px-2 md:px-0">
      {/* audience stats */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h4 className="text-lg font-bold">Subscribers Stats</h4>
          <p className="text-xs font-bold-300">Opted-in activities overview</p>
        </div>
        <button className=" rounded-2xl bg-[#053A67] text-white w-[97px] h-[32px] text-[10px]">
          Tool
        </button>
      </div>
      {/* wrapper */}
      <div className="rounded-[20px] bg-[#FFFFFF] w-full h-[40%] md:h-[379.38px] flex md:flex-col items-center justify-center">
        {/* title */}
        <div className="flex justify-between w-full px-4 py-4">
          {/* all users and stats */}
          <div className="flex items-center ">
            <div className="flex flex-col items-center gap-y-8">
              <div className="flex items-center gap-x-2">
                <BellIcon className="w-5 text-[#053A67]" />
              </div>
              {/* all user stats */}
              <div className="rounded-full bg-[#F2F2F2] h-[56.04px] w-[118px] flex items-center justify-center">
                <p className="text-xs font-bold-300">New Arrival</p>
              </div>
              <div className="rounded-full bg-[#F2F2F2] h-[56.04px] w-[118px] flex items-center justify-center">
                <p className="text-xs font-bold-300">Now Available</p>
              </div>
              <div className="rounded-full bg-[#F2F2F2] h-[56.04px] w-[118px] flex items-center justify-center">
                <p className="text-xs font-bold-300">Flash Sale</p>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex flex-col items-center gap-y-8">
              <div className="flex items-center gap-x-2">
                <HiUserGroup className="w-5 text-[#053A67]" />
                <h5 className="text-xs font-bold-300">All users</h5>
              </div>
              {/* all user stats */}
              <div className="flex items-center justify-center h-[56.04px] w-[118px]">
                <p className="text-xs font-bold-300">3661132728</p>
              </div>
              <div className="flex items-center justify-center h-[56.04px] w-[118px]">
                <p className="text-xs font-bold-300">29761</p>
              </div>
              <div className="flex items-center justify-center h-[56.04px] w-[118px]">
                <p className="text-xs font-bold-300">91</p>
              </div>
            </div>
          </div>

          {/* male and stats*/}
          <div className="flex items-center gap-x-8 ">
            <div className="flex flex-col items-center gap-y-8">
              <div className="flex items-center gap-x-2">
                <MdMale className="w-5 text-[#053A67]" />
                <h5 className="text-xs font-bold-300">Male</h5>
              </div>

              {/* male user */}
              <div className="flex items-center justify-center h-[56.04px] w-[118px]">
                <p className="text-xs font-bold-300">282221</p>
              </div>

              <div className="flex items-center justify-center h-[56.04px] w-[118px]">
                <p className="text-xs font-bold-300">111</p>
              </div>
              <div className="flex items-center justify-center h-[56.04px] w-[118px]">
                <p className="text-xs font-bold-300">80</p>
              </div>
            </div>
          </div>
          {/* female  and stats*/}
          <div className="flex items-center gap-x-8">
            <div className="flex flex-col items-center gap-y-8">
              <div className="flex items-center gap-x-2">
                <BiFemaleSign className="w-5 text-[#053A67]" />
                <h5 className="text-xs font-bold-300">Female</h5>
              </div>
              {/* female user */}
              <div className="flex items-center justify-center h-[56.04px] w-[118px]">
                <p className="text-xs font-bold-300">282221</p>
              </div>

              <div className="flex items-center justify-center h-[56.04px] w-[118px]">
                <p className="text-xs font-bold-300">123</p>
              </div>
              <div className="flex items-center justify-center h-[56.04px] w-[118px]">
                <p className="text-xs font-bold-300">11</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
